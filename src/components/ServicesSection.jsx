import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import serviceImg1 from "../assets/services/toilet-cubicle-installation.webp";
import serviceImg2 from "../assets/services/urinal-partition-system.webp";

export default function ServicesPage() {
  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Restroom Cubicle & Urinal Partition Services | RestCube</title>
        <meta
          name="description"
          content="RestCube offers professional toilet cubicle installation and urinal partition systems for airports, malls, hospitals, offices and public infrastructure."
        />
        <link
          rel="canonical"
          href="https://www.restcube.in/services"
        />
      </Helmet>

      <main className="pt-20">

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-28 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6">

            {/* HEADER */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Our <span className="text-red-600">Services</span>
              </h1>
              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                RestCube delivers complete restroom cubicle and partition
                solutions engineered for durability, hygiene and long-term
                performance in high-traffic commercial environments.
              </p>
            </div>

            {/* ===== SERVICE 1 ===== */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
              <div className="w-full h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={serviceImg1}
                  alt="Toilet Cubicle Installation Services"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Toilet Cubicle Installation
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Professional installation of premium toilet cubicle systems
                  designed for heavy usage commercial washrooms. Our solutions
                  focus on structural strength, moisture resistance and hygiene.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                  <li>✔ Offices, malls, hospitals & airports</li>
                  <li>✔ Moisture & corrosion resistant materials</li>
                  <li>✔ Precision installation & alignment</li>
                  <li>✔ Long service life & low maintenance</li>
                </ul>

                <Link
                  to="/services/toilet-cubicle-installation"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  View Service Details →
                </Link>
              </div>
            </div>

            {/* ===== SERVICE 2 ===== */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Urinal Partition Systems
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  High-quality urinal partition systems offering privacy,
                  hygiene and durability. Designed for easy cleaning and
                  long-term performance in commercial and public washrooms.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                  <li>✔ Privacy-focused ergonomic design</li>
                  <li>✔ Options in HPL, glass & stainless steel</li>
                  <li>✔ Rust & moisture resistant fittings</li>
                  <li>✔ Ideal for public & corporate spaces</li>
                </ul>

                <Link
                  to="/services/urinal-partition-systems"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Explore Partition Systems →
                </Link>
              </div>

              <div className="w-full h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
                <img
                  src={serviceImg2}
                  alt="Urinal Partition Systems"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= INDUSTRIES SERVED ================= */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Industries <span className="text-red-600">We Serve</span>
              </h2>
              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our restroom solutions are trusted across multiple industries
                where hygiene, durability and performance are critical.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {[
                { icon: "✈️", title: "Airports", desc: "High footfall, heavy-duty restroom systems designed for durability and fast maintenance." },
                { icon: "🏬", title: "Shopping Malls", desc: "Aesthetic and long-lasting solutions for high-traffic commercial environments." },
                { icon: "🏥", title: "Hospitals", desc: "Hygienic, moisture-resistant and easy-to-clean restroom partitions." },
                { icon: "🏢", title: "Corporate Offices", desc: "Modern cubicle systems matching corporate interiors with privacy and durability." },
                { icon: "🏫", title: "Educational Institutions", desc: "Robust and safe restroom systems for schools, colleges and universities." },
                { icon: "🏗️", title: "Public Infrastructure", desc: "Heavy-duty restroom solutions for metro stations, stadiums and government facilities." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f7f7f7] rounded-2xl p-10 text-center shadow-sm hover:shadow-lg transition"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
