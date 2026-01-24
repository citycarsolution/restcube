import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Skilled Professionals" },
  { value: 1500, suffix: "+", label: "Projects Delivered" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Cities Served" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1800; // animation speed
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            setCount(value);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-4xl font-extrabold text-red-500 mb-3"
    >
      {count}
      {count === target && suffix}
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Proven <span className="text-red-500">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            A strong track record of delivering premium restroom cubicle
            solutions across India.
          </p>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center
                         border border-white/10 hover:border-red-500
                         transition-all duration-300 hover:-translate-y-2
                         shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <AnimatedCounter target={s.value} suffix={s.suffix} />

              <p className="text-gray-200 font-semibold text-lg">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
