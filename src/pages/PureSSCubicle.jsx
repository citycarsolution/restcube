import { motion } from "framer-motion";

/* HERO IMAGE */
import hero from "../assets/products/stainless-steel/pure-ss-cubicle.jpg";

/* HARDWARE */
import leg from "../assets/products/stainless-steel/Adjustable Leg.webp";
import hinge from "../assets/products/stainless-steel/Gravity Hinges.webp";
import lock from "../assets/products/stainless-steel/Indicator Lock.webp";
import knob from "../assets/products/stainless-steel/Door Knob.webp";
import hook from "../assets/products/stainless-steel/Coat Hook.webp";
import rail from "../assets/products/stainless-steel/Head Rail.webp";
import uChannel from "../assets/products/stainless-steel/U Channel.webp";
import stopper from "../assets/products/stainless-steel/stopper.webp";
import fChannel from "../assets/products/stainless-steel/F Channel.webp";

export default function PureSSCubicle() {
  return (
    <main className="bg-gradient-to-b from-[#f2f4f7] to-white">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-16 lg:pt-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.img
          src={hero}
          alt="Pure SS Cubicle"
          className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <motion.div
          className="backdrop-blur-xl bg-white/60 p-6 md:p-10 rounded-3xl shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Pure SS Toilet Cubicle
          </h1>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Pure stainless steel toilet cubicles manufactured using SS 304 / 316
            grade material. Ideal for premium commercial washrooms, airports and
            hospitals where hygiene, strength and corrosion resistance are
            critical.
          </p>
        </motion.div>
      </section>

      {/* ================= SPECIFICATIONS (MOBILE 2 COLUMN) ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Product Specifications
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <Spec label="Product Type" value="Toilet Cubicles Partition" />
            <Spec label="Panel Material" value="Pure Stainless Steel" />
            <Spec label="Hardware Material" value="SS 304 / SS 316 Grade" />
            <Spec label="Sections" value="Anodized Aluminium" />
            <Spec label="Color" value="Natural Stainless Steel Finish" />
            <Spec label="Surface Finish" value="Satin / Matte" />
            <Spec label="Glue" value="Not Applicable" />
            <Spec
              label="Application"
              value="Commercial & Industrial Washrooms"
            />
            <Spec
              label="Features"
              value="Corrosion Resistant, Hygienic, Fire-Safe, Heavy Duty"
            />
          </div>
        </div>
      </section>

      {/* ================= HARDWARE ================= */}
      <section className="bg-[#f6f7f9] py-16">
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Standard Dimensions (mm)
          </h2>

          <div className="overflow-x-auto rounded-3xl shadow-2xl">
            <table className="w-full text-center backdrop-blur-xl bg-white/80 min-w-[600px]">
              <thead className="bg-[#b89b72] text-white">
                <tr>
                  <th className="p-4">Standard Dimensions</th>
                  <th className="p-4">General (mm)</th>
                  <th className="p-4">Physically Challenged (mm)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <Row label="Width of Cubicle" a="1000" b="1500" />
                <Row label="Depth of Cubicle" a="1500" b="1750" />
                <Row label="Height of Entire Cubicle" a="2000" b="2000" />
                <Row label="Width of Door" a="600" b="900" />
                <Row label="Height of Door" a="1785" b="1785" />
                <Row label="Ground Clearance" a="150" b="150" />
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
  <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow">
    <h4 className="font-semibold text-gray-900 text-sm">{label}</h4>
    <p className="mt-1 text-gray-700 text-sm">{value}</p>
  </div>
);

const Hardware = ({ img, title }) => (
  <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow text-center">
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
