import "./index.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";


export default function App() {
    const [index] = useState([1, 2, 3, 4]);
    const [imgIndex] = useState([1, 2, 3, 4, 5]);
    const appRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const images = gsap.utils.toArray("img");
        const showDemo = () => {
            document.body.style.overflow = "auto";

            document.scrollingElement.scrollTo(0, 0);

            gsap.utils.toArray("section").forEach((section, index) => {
                const w = section.querySelector(".wrapper");
                const [x, xEnd] =
                    index % 2
                        ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
                        : [w.scrollWidth * -1, 0];
                gsap.fromTo(
                    w,
                    { x },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: section,
                            scrub: 0.5
                        }
                    }
                );
            });
        };

        imagesLoaded(images).on("always", showDemo);
    }, []);
    return (
        <div ref={appRef} className="App">
            <div className="loader df aic jcc"></div>
            <div className="demo-wrapper">
                <header className="df aic jcc">
                    <div>
                        <h1>ScrollTrigger</h1>
                        <h2>demo</h2>
                    </div>
                </header>
                <section className="demo-text">
                    <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                </section>

                {index.map((id) => {
                    return (
                        <section key={id} className="demo-gallery">
                            <ul className="wrapper">
                                {imgIndex.map((id) => {
                                    return (
                                        <li key={id}>
                                            <img
                                                height="800"
                                                src="https://source.unsplash.com/random"
                                                alt=""
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}

                <section className="demo-text">
                    <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                </section>
                <footer className="df aic jcc">
                    <p>
                        Images from <a href="https://unsplash.com/">Unsplash</a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
