import { useRef } from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

function App() {
    const container = useRef();
    const circle = useRef();

    useGSAP(
        () => {
            // use selectors...
            gsap.to(".box", { rotation: "+=360", duration: 3 });

            // or refs...
            gsap.to(circle.current, { rotation: "-=360", duration: 3 });
        },
        { scope: container }
    );
  return (
    <>
        <div ref={container} className="container">
            <div className="box gradient-blue">selector</div>
            <div className="circle gradient-green" ref={circle}>
                Ref
            </div>
        </div>
        <div className="box gradient-blue">selector</div>
    </>
  )
}

export default App
