import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import serviceImg1 from "../assets/services/toilet-cubicle-installation.webp";
import serviceImg2 from "../assets/services/urinal-partition-system.webp";

export default function UrinalPartitionOverview() {
  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Urinal Partition Solutions | RestCube</title>
        <meta
          name="description"
          content="Complete urinal partition solutions by RestCube including installation services and systems for airports, malls, hospitals and commercial washrooms."
        />
        <link
          rel="canonical"
          href="https://www.restcube.in/services/urinal-partition-systems"
        />
      </Helmet>

      <main className="pt-20">

        {/* ===== PAGE HEADER ===== */}
        <section className="bg-[#f4f4f4] py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Urinal <span className="text-red-600">Partition Solutions</span>
          </h1>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end urinal partition systems and installation services
            engineered for hygiene, privacy and durability in commercial
            washrooms.
          </p>
        </section>

        {/* ===== SERVICE 1 ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE BOX */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-[280px] sm:h-[320px] lg:h-[360px]">
              <img
                src={serviceImg1}
                alt="Toilet Cubicle Installation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Toilet Cubicle Installation
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Professional installation of premium toilet cubicle systems
                designed for heavy-usage commercial washrooms with focus on
                durability, hygiene and long service life.
              </p>

              <Link
                to="/services/toilet-cubicle-installation"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                View Service Details →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SERVICE 2 ===== */}
        <section className="py-24 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

            {/* CONTENT */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Urinal Partition Systems
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                High-quality urinal partition systems offering enhanced privacy,
                moisture resistance and easy maintenance for modern commercial
                washrooms.
              </p>

              <Link
                to="/services/urinal-partition-systems"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Explore Systems →
              </Link>
            </div>

            {/* IMAGE BOX */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-[280px] sm:h-[320px] lg:h-[360px] order-1 lg:order-2">
              <img
                src={serviceImg2}
                alt="Urinal Partition Systems"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ===== INDUSTRIES ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-extrabold mb-6">
              Industries <span className="text-red-600">We Serve</span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-14">
              Our urinal partition and restroom solutions are trusted across
              industries where hygiene, durability and performance are critical.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "Airports",
                "Shopping Malls",
                "Hospitals",
                "Corporate Offices",
                "Educational Institutes",
                "Public Infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
