import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

function App() {
    gsap.registerPlugin(useGSAP)


        const { contextSafe } = useGSAP();

        // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
        const onEnter = contextSafe(({ currentTarget }) => {
            gsap.to(currentTarget, { rotation: "+=360" });
        });
  return (
      <div className='class="panel center text-center"'>


      <div className="app flex-row">
          <div className="box gradient-blue" onClick={onEnter}>
              Click Me
          </div>
      </div>
      </div>
  )
}

export default App
