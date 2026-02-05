import { Helmet } from "react-helmet";
import serviceImg from "../assets/services/urinal-partition-system.webp";

export default function UrinalPartitionSystems() {
  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Urinal Partition Systems | HPL, Glass & SS | RestCube</title>
        <meta
          name="description"
          content="Premium urinal partition systems by RestCube. Available in HPL compact board, frosted glass and stainless steel for commercial washrooms."
        />
        <link
          rel="canonical"
          href="https://www.restcube.in/urinal-partition-systems"
        />
      </Helmet>

      <main className="pt-20 bg-[#f2f2f2]">

        {/* ===== PAGE TITLE ===== */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            URINAL PARTITION SYSTEMS
          </h1>
          <div className="w-44 h-[2px] bg-red-600 mx-auto mt-6" />
        </section>

        {/* ===== CONTENT ===== */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 gap-14 items-start">

            {/* IMAGE */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-2">
                <img
                  src={serviceImg}
                  alt="Urinal Partition Systems"
                  className="w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                Urinal dividers ensure privacy in open floor plan washrooms.
                Also known as privacy screens, these partitions are installed
                between urinals to block visual contact and enhance hygiene
                and user comfort in commercial restrooms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                RestCube offers a wide range of urinal partition systems using
                high-quality materials such as compact laminate (HPL),
                frosted glass and stainless steel. Designed for durability,
                moisture resistance and easy maintenance, our systems are
                ideal for malls, offices, airports and public facilities.
              </p>

              {/* FEATURE LIST */}
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 mb-10">
                <li>• Privacy-focused ergonomic design</li>
                <li>• Moisture & corrosion resistant</li>
                <li>• Options in HPL, glass & stainless steel</li>
                <li>• Easy to clean & low maintenance</li>
              </ul>

              {/* DIMENSION TABLE */}
              <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-semibold">
                        Standard Dimensions
                      </th>
                      <th className="p-4 text-right font-semibold">
                        General (mm)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t">
                      <td className="p-4">Total Height</td>
                      <td className="p-4 text-right">1000 – 2000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Depth</td>
                      <td className="p-4 text-right">450 – 550</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Gap from Ground Floor</td>
                      <td className="p-4 text-right">500 – 600</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
