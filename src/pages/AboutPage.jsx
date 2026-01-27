import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ✅ WARRANTY IMAGES FROM src/assets */
import warranty10 from "../assets/about/warranty-10-year.webp";
import warranty1 from "../assets/about/warranty-1-year.webp";

export default function AboutPage() {
  const [count, setCount] = useState({
    years: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const i = setInterval(() => {
      setCount((p) => ({
        years: p.years < 10 ? p.years + 1 : 10,
        projects: p.projects < 2500 ? p.projects + 50 : 2500,
        clients: p.clients < 1800 ? p.clients + 40 : 1800,
      }));
    }, 40);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    document.title =
      "About RestCube | Toilet Cubicle Manufacturer in Mumbai, Pune, Delhi";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "RestCube is a leading toilet cubicle manufacturer in Mumbai, Pune, Delhi, Bangalore, Chennai, Hyderabad & Ahmedabad.";
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="bg-[#f4f4f4]">

      {/* ABOUT HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.img
          src="/about/about-main.jpeg"
          alt="RestCube Toilet Cubicle Manufacturer"
          loading="lazy"
          className="rounded-2xl shadow-2xl w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold mb-5">
            RESTCUBE CUBICLE
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Our business and reputation are built on quality design,
            manufacturing excellence and customer satisfaction.
          </p>

          <p className="mt-4 text-gray-700">
            Our product range includes Toilet Cubicles, Changing Room
            Cubicles, Mall Toilet Cubicle Partition, School Toilet Cubicle,
            Ceiling Hung Model Bathroom Cubicle and Commercial Washroom
            Solutions.
          </p>
        </motion.div>
      </section>

      {/* COUNTERS */}
      <section className="bg-[#0f172a] text-white py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          <Counter value={count.years} label="Years Experience" />
          <Counter value={count.projects} label="Projects Completed" />
          <Counter value={count.clients} label="Happy Clients" />
        </div>
      </section>

      {/* WARRANTY */}
      <section className="bg-[#f4f4f4] py-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          WARRANTY
        </h2>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Warranty
            img={warranty10}
            text="10 Year Warranty on Compact Board (HPL)"
          />
          <Warranty
            img={warranty1}
            text="1 Year Warranty on Hardware’s and Sections"
          />
        </div>
      </section>

      {/* CITY LINKS */}
      <section className="py-16 text-center">
        <p className="font-semibold mb-4">Serving Across India</p>
        <div className="flex flex-wrap justify-center gap-4 text-red-600 font-medium">
          <Link to="/toilet-cubicle-mumbai">Mumbai</Link>
          <Link to="/toilet-cubicle-pune">Pune</Link>
          <Link to="/toilet-cubicle-bangalore">Bangalore</Link>
          <Link to="/toilet-cubicle-hyderabad">Hyderabad</Link>
        </div>
      </section>

    </main>
  );
}

/* COMPONENTS */

const Counter = ({ value, label }) => (
  <div>
    <h3 className="text-5xl font-extrabold text-red-500">{value}+</h3>
    <p className="mt-2 text-gray-300">{label}</p>
  </div>
);

const Warranty = ({ img, text }) => (
  <div className="bg-white p-10 rounded-xl shadow text-center">
    <img src={img} loading="lazy" className="mx-auto h-32 mb-6" />
    <p className="font-semibold">{text}</p>
  </div>
);
