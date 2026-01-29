import React, { useEffect, useRef } from 'react';

const InterObserverCompo = () => {

    const boxRef = useRef(null)

    useEffect(() => {
        if (!boxRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // console.log(entries[0], "...entries");
                if (entries[0].isIntersecting) {
                    console.log("BOX SCREEN ME AAYA 🔥");
                }

            },
            {
                root: null,
                threshold: 0.5
            }
        )

        observer.observe(boxRef.current);

        // console.log(observer, "...observer");

        return () => observer.disconnect()

    }, [])

    return (
        <div style={{ height: "200vh", width: "100%" }}>
            <div
                ref={boxRef}
                style={{
                    marginTop: "150vh",
                    width: "400px",
                    height: "100px",
                    backgroundColor: "red"
                }}
            >


            </div>
        </div>
    );
}

export default InterObserverCompo;
