import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { cities, products } from "../data/cityProductData";

export default function CityProductPage() {
  const { productSlug, citySlug } = useParams();

  const city = cities.find((c) => c.slug === citySlug);
  const product = products.find((p) => p.slug === productSlug);

  if (!city || !product) {
    return <Navigate to="/" replace />;
  }

  const title = `${product.name} Manufacturer in ${city.name} | RestCube`;
  const description = `${product.keyword} in ${city.name}. ${city.intro} Ideal for malls, airports, hospitals & commercial washrooms.`;

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://www.restcube.in/${product.slug}-${city.slug}`}
        />
      </Helmet>

      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="bg-[#f5f5f5] py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {product.name} in{" "}
            <span className="text-red-600">{city.name}</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {city.intro} RestCube offers premium {product.name.toLowerCase()}
            solutions designed for durability, hygiene and long-term performance.
          </p>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Leading {product.name} Manufacturer in {city.name}
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                RestCube is a trusted {product.keyword} in {city.name}. Our
                products are widely used in airports, shopping malls,
                hospitals, corporate offices and public infrastructure projects.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                <li>✔ Heavy-duty & moisture resistant</li>
                <li>✔ Hygienic & easy to maintain</li>
                <li>✔ Premium hardware & fittings</li>
                <li>✔ Custom sizes & finishes</li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services/toilet-cubicle-installation"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Installation Services →
                </Link>

                <a
                  href="https://wa.me/919664551771"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#f7f7f7] p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose RestCube in {city.name}?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                With years of experience, RestCube delivers high-performance
                restroom cubicle and partition systems tailored for commercial
                environments in {city.name}.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Trusted brand across India</li>
                <li>• Fast delivery & professional installation</li>
                <li>• Competitive pricing</li>
                <li>• After-sales support</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
              Applications in{" "}
              <span className="text-red-600">{city.name}</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Airports",
                "Shopping Malls",
                "Hospitals",
                "Corporate Offices",
                "Educational Institutions",
                "Public Infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
