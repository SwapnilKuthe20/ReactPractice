import React, { useEffect } from 'react';

const ScrollEvent = () => {


    useEffect(() => {

        const handleScroll = () => {
            console.log(window.screenY, "Scroll Event run...");
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div>
            <h1> Throattling Scroll Testing </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ipsam.</p>
        </div>
    );
}

export default ScrollEvent;
