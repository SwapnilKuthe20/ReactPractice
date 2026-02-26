import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    tagTypes: ["Posts"],

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "posts",
            providesTags: (result) => (
                // console.log(result, "...resp...")

                result
                    ? [
                        ...result?.map((post) => ({
                            type: "Posts",
                            id: post.id
                        })),
                        { type: "Posts", id: "LIST" }
                    ]
                    : [{ type: "Posts", id: "LIST" }]
            )
        }),

        getPostById: builder.query({
            query: (id) => `posts/${id}`,

            providesTags: (result, error, arg) => ([
                { type: 'Posts', id: arg }
            ])

        }),

        addPost: builder.mutation({
            query: (payload) => ({
                url: "posts",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: [{ type: "Posts", id: "LIST" }]
        }),

        updatePost: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `posts/${id}`,
                method: "PUT",
                body: data
            }),

            invalidatesTags: (result, error, arg) => ([
                { type: "Posts", id: arg.id }
            ])
        }),

        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Posts', id: arg },
                { type: 'Posts', id: 'LIST' }
            ],
        })
    })
})

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useGetPostByIdQuery,
    useUpdatePostMutation,
    useDeletePostMutation
} = api

