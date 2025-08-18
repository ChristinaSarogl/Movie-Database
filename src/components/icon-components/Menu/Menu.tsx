import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// type HamburgerRefs ={
//   containerRef: any;
//   topRef: any;
//   middleRef: any;
//   bottomRef: any;
// }

gsap.registerPlugin(useGSAP);

function Menu() {

  const containerRef = useRef(null);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP( () => {
    timeline.current = gsap.timeline({paused:true})
      .to(topRef.current, {y: 13, duration: 0.3, ease: "power2.inOut"}, 0)
      .to(bottomRef.current, {y: -13, duration: 0.3, ease: "power2.inOut"}, 0)

      .to(containerRef.current, { rotation: 90, duration: 0.5, ease: "power2.inOut"})

      .to(topRef.current, { rotation: 45, duration: 0.3, transformOrigin: "50% 50%" }, "<0.2")
      .to(bottomRef.current, { rotation: -45, duration: 0.3, transformOrigin: "50% 50%" }, "<")
      .to(middleRef.current, { rotation: -45, duration: 0.3, transformOrigin: "50% 50%" }, "<")
  }, [containerRef]);

  const toggleMenu = () => {
    if (!timeline.current) {
      return;
    }

    if (timeline.current.reversed() || timeline.current.progress() === 0) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
  };

  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="40"
    //   height="40"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    // >
    //   <path d="M4 12h16" />
    //   <path d="M4 18h16" />
    //   <path d="M4 6h16">
    //   </path>
    // </svg>
    <div onClick={toggleMenu}>
      <svg
        ref={containerRef}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line ref={topRef} x1="4" y1="7" x2="36" y2="7" />
        <line ref={middleRef} x1="4" y1="20" x2="36" y2="20" />
        <line ref={bottomRef} x1="4" y1="33" x2="36" y2="33" />
      </svg>
    </div>
  );
}

export default Menu;
