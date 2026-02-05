import { Helmet } from "react-helmet";
import productImg from "../assets/services/urinal-partition-system.webp";

export default function UrinalPartitionDetail() {
  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Frosted Glass Urinal Partition System | RestCube India</title>
        <meta
          name="description"
          content="Frosted glass urinal partition systems by RestCube ensure privacy, hygiene and durability. Ideal for malls, offices, airports and public washrooms."
        />
        <link
          rel="canonical"
          href="https://www.restcube.in/urinal-partition-systems/frosted-glass"
        />
      </Helmet>

      <main className="pt-20 bg-[#f2f2f2]">

        {/* ===== TITLE SECTION ===== */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            FROSTED GLASS PARTITION – UMP
          </h1>

          <div className="w-40 h-[2px] bg-red-600 mx-auto mt-6" />
        </section>

        {/* ===== CONTENT SECTION ===== */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 gap-14 items-start">

            {/* IMAGE */}
            <div className="lg:col-span-1">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-2">
                <img
                  src={productImg}
                  alt="Frosted Glass Urinal Partition System"
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                Urinal dividers ensure privacy in an open floor plan for washrooms.
                Also known as privacy screens, these are installed between urinals
                to block visual contact and enhance personal comfort. RestCube offers
                multiple configurations to suit modern commercial washrooms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-10">
                <strong>Chamfer Glass Urinal Partition:</strong> Made from 12mm
                thick heat-strengthened glass with dual-side acid frosted finish.
                Precision cut and finished in various sizes, fixed securely on
                wall using SS 304 heavy “L” brackets with inserts.
              </p>

              {/* ===== SPEC TABLE ===== */}
              <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 font-semibold">Standard Dimensions</th>
                      <th className="p-4 font-semibold text-right">
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
