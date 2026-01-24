import { useParams } from "react-router-dom";
import { cities, products } from "../data/cityProductData";

export default function CityProductPage() {
  const { citySlug, productSlug } = useParams();

  const city = cities.find((c) => c.slug === citySlug);
  const product = products.find((p) => p.slug === productSlug);

  if (!city || !product) {
    return <div className="py-40 text-center">Page Not Found</div>;
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 SEO H1 */}
        <h1 className="text-4xl font-extrabold mb-6">
          {product.name} in{" "}
          <span className="text-red-600">{city.name}</span>
        </h1>

        {/* 🔑 SEO INTRO */}
        <p className="text-gray-700 text-lg mb-8">
          {city.intro} RestCube is a leading{" "}
          <strong>
            {product.keyword} in {city.name}
          </strong>{" "}
          delivering durable, hygienic and modern restroom cubicle solutions
          for malls, offices, hospitals, airports and commercial spaces.
        </p>

        {/* 🔥 BULLET SEO BOOST */}
        <ul className="grid sm:grid-cols-2 gap-4 mb-10">
          <li>✔ Manufacturer & supplier in {city.name}</li>
          <li>✔ High-traffic commercial restroom solutions</li>
          <li>✔ Custom size & design options</li>
          <li>✔ Installation & after-sales support</li>
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Get Quote in {city.name} →
        </a>
      </div>
    </section>
  );
}
