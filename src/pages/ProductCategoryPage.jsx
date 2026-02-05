import { useParams, Navigate } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";

const PRODUCT_PAGES = {
  "toilet-cubicles": {
    title: "Toilet Cubicles",
    subtitle: "Premium toilet cubicle solutions by RestCube",
  },
};

export default function ProductCategoryPage() {
  const { category } = useParams();

  if (!PRODUCT_PAGES[category]) {
    return <Navigate to="/" replace />;
  }

  const { title, subtitle } = PRODUCT_PAGES[category];

  return (
    <main className="pt-16">
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      </section>

      <ProductsSection category={category} />
    </main>
  );
}
