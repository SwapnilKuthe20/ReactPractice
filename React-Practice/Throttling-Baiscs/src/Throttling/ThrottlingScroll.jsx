import React, { useEffect, useState } from 'react';

const ThrottlingScroll = () => {

    const [topBtn, setTopBtn] = useState(false)

    useEffect(() => {

        let lastCall = 0

        const handleScroll = () => {

            const now = Date.now()

            if (now - lastCall < 500) return;

            lastCall = now;

            if (window.scrollY > 300) {
                setTopBtn(true)
            } else {
                setTopBtn(false)
            }

        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [topBtn])

    return (
        <div>
            <h1> Throttling Scroll !! </h1>
            {
                topBtn && (
                    <button
                        style={{ position: "fixed", bottom: 20, right: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >

                        TOP !
                    </button>
                )
            }
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, consectetur.</p>

            </div>
        </div>
    );
}

export default ThrottlingScroll;
