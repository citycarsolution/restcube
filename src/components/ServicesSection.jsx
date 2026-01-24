import serviceImg1 from "../assets/services/toilet-cubicle-installation.WEBP";
import serviceImg2 from "../assets/services/urinal-partition-system.WEBP";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">
          Urinal <span className="text-red-600">Partition</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete restroom cubicle solutions – from design consultation to
            installation and long-term maintenance.
          </p>
        </div>

        {/* SERVICE 1 */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* IMAGE BOX */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[360px]">
            <img
              src={serviceImg1}
              alt="Toilet Cubicle Installation Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Toilet Cubicle Installation
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We provide end-to-end toilet cubicle installation services with
              precision fitting, premium materials, and flawless finishing.
              Our solutions are ideal for offices, malls, hospitals, airports
              and high-traffic commercial restrooms.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Professional on-site execution</li>
              <li>✔ Durable & hygienic materials</li>
              <li>✔ Timely project completion</li>
            </ul>

            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* CONTENT */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Urinal Partition Systems
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our urinal partition systems are designed for privacy,
              durability and easy maintenance. Available in HPL, glass,
              stainless steel and compact laminate options to suit modern
              commercial washrooms.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Privacy-focused design</li>
              <li>✔ Moisture & corrosion resistant</li>
              <li>✔ Ideal for public & commercial spaces</li>
            </ul>

            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Learn More
            </button>
          </div>

          {/* IMAGE BOX */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[360px] order-1 lg:order-2">
            <img
              src={serviceImg2}
              alt="Urinal Partition Systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
