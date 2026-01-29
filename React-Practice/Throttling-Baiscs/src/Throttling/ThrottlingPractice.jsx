import React, { useEffect, useState } from 'react';

const ThrottlingPractice = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);

            if (window.scrollY > 500) {
                console.log(show, "...show");
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [show])

    return (
        <div>
            <h1> Scroll Throttling Practice </h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.</p>
            </div>

            {
                show &&
                (<button
                    style={{ position: "fixed", bottom: 20, right: 20 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Top !
                </button>)
            }




        </div>
    );
}

export default ThrottlingPractice;
