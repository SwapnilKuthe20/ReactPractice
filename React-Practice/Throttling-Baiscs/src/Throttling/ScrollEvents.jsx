import React, { useEffect } from 'react';

const ScrollEvents = () => {

    useEffect(() => {

        const handleScroll = () => {
            console.log("Scroll event run...", window.scrollY);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <div>
            <h1> Events on Scrolls </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita.</p>
        </div>
    );
}

export default ScrollEvents;
