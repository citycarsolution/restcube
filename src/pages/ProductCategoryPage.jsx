import { useParams } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";

const pageTitles = {
  "toilet-cubicles": "Toilet Cubicles",
  "shower-cubicles": "Shower Cubicles",
  "changing-room-cubicles": "Changing Room Cubicles",
  "school-toilet-cubicles": "School Toilet Cubicles",
  "mall-toilet-partitions": "Mall Toilet Partitions",
  "ceiling-hung-cubicles": "Ceiling Hung Cubicles",
};

export default function ProductCategoryPage() {
  const { category } = useParams();

  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-extrabold">
          {pageTitles[category] || "Products"}
        </h1>
        <p className="mt-4 text-gray-600">
          Premium restroom cubicle solutions by RestCube
        </p>
      </section>

      {/* PRODUCTS LIST */}
      <ProductsSection />
    </main>
  );
}
