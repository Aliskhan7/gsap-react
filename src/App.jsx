import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
    const trigger1 = useRef();
    const trigger2 = useRef();
    const rootDiv = useRef();
    const timeline1 = useRef();
    const timeline2 = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl1 = (timeline1.current = gsap.timeline());
            const tl2 = (timeline2.current = gsap.timeline());

            tl1.to(".animDiv1", { scale: 1 });
            tl2.to(".animDiv2", { scale: 1 });

            ScrollTrigger.create({
                trigger: trigger1.current,
                animation: tl1,
                start: () => "top top",
                end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
                scrub: true,
            });

            ScrollTrigger.create({
                trigger: trigger2.current,
                animation: tl2,
                start: () => "top top",
                end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
                scrub: true,
            });

            return () => ScrollTrigger.killAll();
        }, rootDiv);

        return () => ctx.revert();
    });

    return (
        <div ref={rootDiv}>
            <div className=" triggers relative z-50 w-fit mx-auto">
                <div
                    ref={trigger1}
                    className=" text-blue-400 font-bold w-10 h-[200vh] bg-[#FFC000] "
                ></div>
                <div
                    ref={trigger2}
                    className=" text-blue-400 font-bold w-10 h-[200vh] bg-green-500 "
                ></div>
            </div>

            <div className="relative">
                <div className="animDiv1 fixed top-0 z-10 w-screen h-screen bg-blue-500 scale-[30%]"></div>
                <div className="animDiv2 fixed top-0 z-20 w-screen h-screen bg-red-500 scale-0"></div>
            </div>
        </div>
    );
}
