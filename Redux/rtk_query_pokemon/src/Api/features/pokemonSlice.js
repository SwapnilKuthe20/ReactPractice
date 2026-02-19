import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const pokemonApi = createApi({
    reducerPath: "pokemon",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Posts"],  // <-- add this
    endpoints: (builder) => ({

        getPosts: builder.query({
            query: () => '/posts'
        }),

        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),

        addPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost
            }),
        }),
    }),
    invalidatesTags: ["Posts"], // <-- after adding post, refresh "Posts" query
});

// console.log(pokemonApi.endpoints, "....hooks");

export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation } = pokemonApi

// console.log(useGetPostsQuery, "...useGetPostQuery");

