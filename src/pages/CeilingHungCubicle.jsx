import { motion } from "framer-motion";

/* HERO IMAGE */
import hero from "../assets/products/stainless-steel/ceiling-hung-toilet-cubicle.jpg";

/* HARDWARE */
import leg from "../assets/products/stainless-steel/Adjustable Leg.webp";
import hinge from "../assets/products/stainless-steel/Gravity Hinges.webp";
import lock from "../assets/products/stainless-steel/Indicator Lock.webp";
import knob from "../assets/products/stainless-steel/Door Knob.webp";
import hook from "../assets/products/stainless-steel/Coat Hook.webp";
import rail from "../assets/products/stainless-steel/Head Rail.webp";
import uChannel from "../assets/products/stainless-steel/U Channel.webp";
import stopper from "../assets/products/stainless-steel/Door Stopper.webp";
import fChannel from "../assets/products/stainless-steel/F Channel.webp";

export default function CeilingHungCubicle() {
  return (
    <main className="bg-gradient-to-b from-[#f2f4f7] to-white">

      {/* ================= HERO (HEADER GAP FIXED) ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-16 lg:pt-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.img
          src={hero}
          alt="Ceiling Hung Cubicle"
          className="rounded-3xl shadow-2xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <motion.div
          className="bg-white/70 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ceiling Hung Cubicle
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Modern ceiling hung toilet cubicles designed for premium commercial
            washrooms. Ideal for malls, airports, corporate offices and luxury
            spaces where floor-free design is required. Provides superior
            hygiene, easy floor cleaning and a sleek floating appearance with
            durable stainless steel hardware.
          </p>
        </motion.div>
      </section>

      {/* ================= SPECIFICATIONS (MOBILE 2-COLUMN FIX) ================= */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Product Specifications
          </h2>

          {/* 🔥 MOBILE 2 COLUMN */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            <Spec label="Product Type" value="Toilet Cubicle Partition" />
            <Spec label="Board Material" value="Phenol Resin (HPL)" />
            <Spec label="Hardware Material" value="SS 304 / 316 Grade" />
            <Spec label="Sections" value="Stainless Steel Shoe Box" />
            <Spec label="Color Options" value="Any Color" />
            <Spec label="Surface Finish" value="Suede, Wood Grain, Matte" />
            <Spec label="Glue" value="Melamine" />
            <Spec label="Application" value="Commercial Washrooms" />
            <Spec
              label="Features"
              value="Moisture Resistant, Fire-Resistant, Heavy Duty"
            />
          </div>
        </div>
      </section>

      {/* ================= HARDWARE ================= */}
      <section className="bg-[#f6f7f9] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Hardware & Accessories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <Hardware img={leg} title="Adjustable Leg" />
            <Hardware img={hinge} title="Gravity Hinges" />
            <Hardware img={lock} title="Indicator Lock" />
            <Hardware img={knob} title="Door Knob" />
            <Hardware img={hook} title="Coat Hook" />
            <Hardware img={rail} title="Top / Head Rail" />
            <Hardware img={uChannel} title="U Channel" />
            <Hardware img={stopper} title="Door Stopper" />
            <Hardware img={fChannel} title="F Channel" />
          </div>
        </div>
      </section>

      {/* ================= DIMENSIONS ================= */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Standard Dimensions (mm)
          </h2>

          <div className="overflow-x-auto rounded-3xl shadow-2xl">
            <table className="w-full text-center bg-white min-w-[600px]">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">General</th>
                  <th className="p-4">Physically Challenged</th>
                </tr>
              </thead>
              <tbody>
                <Row label="Width of Cubicle" a="1000" b="1500" />
                <Row label="Depth of Cubicle" a="1500" b="1750" />
                <Row label="Height of Cubicle" a="2100" b="2100" />
                <Row label="Width of Door" a="600" b="900" />
                <Row label="Height of Door" a="1915" b="1915" />
                <Row label="Ground Clearance" a="100" b="100" />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

const Spec = ({ label, value }) => (
  <div className="bg-white p-4 rounded-2xl shadow">
    <h4 className="font-semibold text-sm">{label}</h4>
    <p className="mt-1 text-gray-700 text-sm">{value}</p>
  </div>
);

const Hardware = ({ img, title }) => (
  <div className="bg-white rounded-2xl p-5 shadow text-center">
    <img src={img} alt={title} className="mx-auto h-20 object-contain" />
    <p className="mt-3 font-semibold text-sm">{title}</p>
  </div>
);

const Row = ({ label, a, b }) => (
  <tr className="border-t">
    <td className="p-4 font-medium">{label}</td>
    <td className="p-4">{a}</td>
    <td className="p-4">{b}</td>
  </tr>
);
