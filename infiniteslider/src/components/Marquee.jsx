import React, { useRef, useEffect, useState } from 'react';
import './Marquee.css';

const items = [
    { name: "Angular", image: "/logos/AngularJS.png" },
    { name: "Astro", image: "/logos/Astro.png" },
    { name: "AWS", image: "/logos/AWS.png" },
    { name: "Bootstrap", image: "/logos/Bootstrap.png" },
    { name: "C#", image: "/logos/csharp.png" },
    { name: "C", image: "/logos/C.png" },
    { name: "C++", image: "/logos/C++ (CPlusPlus).png" },
    { name: "CSS3", image: "/logos/CSS3.png" },
    { name: "Deno", image: "/logos/Deno.png" },
    { name: "Django", image: "/logos/Django.png" },
    { name: "Docker", image: "/logos/Docker.png" },
    { name: "Flutter", image: "/logos/Flutter.png" },
    { name: "Git", image: "/logos/Git.png" },
    { name: "GitLab", image: "/logos/GitLab.png" },
    { name: "HTML5", image: "/logos/HTML5.png" },
    { name: "Java", image: "/logos/Java.png" },
    { name: "JavaScript", image: "/logos/JavaScript.png" },
    { name: "JSON", image: "/logos/JSON.png" },
    { name: "Kotlin", image: "/logos/Kotlin.png" },
    { name: "Kubernetes", image: "/logos/Kubernetes.png" },
    { name: "MongoDB", image: "/logos/MongoDB.png" },
    { name: "MySQL", image: "/logos/MySQL.png" },
    { name: "Nest", image: "/logos/Nest.js.png" },
    { name: "Next", image: "/logos/Next.js.png" },
    { name: "Node", image: "/logos/Node.js.png" },
    { name: "PHP", image: "/logos/PHP.png" },
    { name: "PostgreSQL", image: "/logos/postgres.png" },
    { name: "R", image: "/logos/R.png" },
    { name: "React", image: "/logos/React.png" },
    { name: "Redis", image: "/logos/Redis.png" },
    { name: "Ruby", image: "/logos/Ruby.png" },
    { name: "Rust", image: "/logos/Rust.png" },
    { name: "Svelte", image: "/logos/Svelte.png" },
    { name: "Swift", image: "/logos/Swift.png" },
    { name: "Tailwind CSS", image: "/logos/Tailwind CSS.png" },
    { name: "TypeScript", image: "/logos/TypeScript.png" },
    { name: "Vue", image: "/logos/Vue.js.png" },
  ];
  

export default function Marquee() {
  const [loopNum, setLoopNum] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && innerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const innerWidth = innerRef.current.offsetWidth;
      
      const totalLoops = Math.ceil(containerWidth / innerWidth) + 1;
      setLoopNum(totalLoops);
      setIsReady(true);
    }
  }, []);

  return (
    <div className="marquee-container" ref={containerRef}>
      <div className={`marquee-inner ${isReady ? 'animate' : ''}`} ref={innerRef}>
        {[...Array(loopNum)].map((_, index) => (
          <div key={index} className="marquee-content">
            {items.map((item, itemIndex) => (
              <div key={`${index}-${itemIndex}`} className="marquee-item">
                <img src={item.image} alt={item.name} className="marquee-image" />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="marquee-overlay-left" />
      <div className="marquee-overlay-right" />
    </div>
  );
}

// INFINITE
// import React, { useRef, useEffect, useState } from 'react';
// import './Marquee.css';

// const items = [
//   { name: "Angular", image: "/logos/AngularJS.png" },
//   { name: "React", image: "/logos/React.png" },
//   { name: "Svelte", image: "/logos/Svelte.png" },
//   { name: "Vue", image: "/logos/Vue.js.png" },
//   { name: "Next", image: "/logos/Next.js.png" },
// ];

// export default function Marquee() {
//   const [clones, setClones] = useState(2);
//   const containerRef = useRef(null);
//   const innerRef = useRef(null);

//   useEffect(() => {
//     const calculateClones = () => {
//       if (containerRef.current && innerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const contentWidth = innerRef.current.children[0].offsetWidth;
//         const newClones = Math.ceil(containerWidth / contentWidth) + 1;
//         setClones(newClones);
//       }
//     };

//     calculateClones();
//     window.addEventListener('resize', calculateClones);

//     return () => window.removeEventListener('resize', calculateClones);
//   }, []);

//   useEffect(() => {
//     const inner = innerRef.current;
//     if (!inner) return;

//     const handleAnimation = () => {
//       const firstItem = inner.children[0];
//       const itemWidth = firstItem.offsetWidth;
      
//       if (inner.scrollLeft >= itemWidth) {
//         inner.scrollLeft -= itemWidth;
//       } else {
//         inner.scrollLeft += 1;
//       }
//     };

//     const animationInterval = setInterval(handleAnimation, 20);

//     return () => clearInterval(animationInterval);
//   }, []);

//   return (
//     <div className="marquee-container" ref={containerRef}>
//       <div className="marquee-inner" ref={innerRef}>
//         {[...Array(clones)].map((_, index) => (
//           <div key={index} className="marquee-content">
//             {items.map((item, itemIndex) => (
//               <div key={`${index}-${itemIndex}`} className="marquee-item">
//                 <img src={item.image} alt={item.name} className="marquee-image" />
//                 <span className="marquee-text">{item.name}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="marquee-overlay-left" />
//       <div className="marquee-overlay-right" />
//     </div>
//   );
// }

