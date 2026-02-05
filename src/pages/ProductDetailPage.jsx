import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ssImg from "../assets/products/stainless-steel-toilet-cubicle.jpg";

const productData = {
  "stainless-steel-toilet-cubicle": {
    title: "Stainless Steel Toilet Cubicle",
    image: ssImg,
    description:
      "Premium stainless steel toilet cubicles designed for malls, airports, hospitals and commercial washrooms.",
  },
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = productData[slug];

  if (!product) {
    return <div className="pt-24 text-center">Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | RestCube</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
