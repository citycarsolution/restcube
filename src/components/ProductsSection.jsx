import { Link } from "react-router-dom";

import ssImg from "../assets/products/stainless-steel-toilet-cubicle.jpg";
import pureSSImg from "../assets/products/pure-ss-cubicle.jpg";
import shoeBoxImg from "../assets/products/shoe-box-cubicle.jpg";
import ceilingHungImg from "../assets/products/ceiling-hung-toilet-cubicle.jpg";
import changingRoomImg from "../assets/products/changing-room-cubicle.jpg";
import kidsImg from "../assets/products/kids-toilet-cubicle.jpg";
import pdDoorImg from "../assets/products/pd-door-cubicle.jpg";
import nylonImg from "../assets/products/Smokey Grey Nylon 2 copy.jpg";
import greySlateImg from "../assets/products/Grey And slate grey.jpg";

const products = [
  {
    name: "Stainless Steel Toilet Cubicle",
    img: ssImg,
    desc: "Premium stainless steel toilet cubicles for malls, airports and hospitals.",
  },
  {
    name: "Pure SS Cubicle",
    img: pureSSImg,
    desc: "High-hygiene stainless steel cubicles for commercial restrooms.",
  },
  {
    name: "Shoe Box Toilet Cubicle",
    img: shoeBoxImg,
    desc: "Modern shoe box type toilet cubicles with elegant finish.",
  },
  {
    name: "Ceiling Hung Cubicle",
    img: ceilingHungImg,
    desc: "Floating ceiling hung cubicles ideal for premium spaces.",
  },
  {
    name: "Changing Room Cubicle",
    img: changingRoomImg,
    desc: "Durable changing room cubicles for malls and gyms.",
  },
  {
    name: "Kids Toilet Cubicle",
    img: kidsImg,
    desc: "Colorful and safe cubicles designed specially for kids.",
  },
  {
    name: "PD Door Cubicle",
    img: pdDoorImg,
    desc: "Modern PD door cubicle system replacing masonry walls.",
  },
  {
    name: "Nylon Toilet Cubicle",
    img: nylonImg,
    desc: "Lightweight nylon cubicles with moisture resistance.",
  },
  {
    name: "Grey & Slate Cubicle",
    img: greySlateImg,
    desc: "Designer cubicles with grey and slate finish.",
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Restroom Cubicle <span className="text-red-600">Products</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Complete range of toilet cubicle systems for commercial and public
            washrooms across India.
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:hidden">
          {products.map((p) => {
            const slug = `/${slugify(p.name)}`;

            return (
              <div
                key={p.name}
                className="min-w-[85%] snap-start bg-gray-50 rounded-2xl shadow overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.desc}</p>

                  <Link
                    to={slug}
                    className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => {
            const slug = `/${slugify(p.name)}`;

            return (
              <div
                key={p.name}
                className="bg-gray-50 rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-5">{p.desc}</p>

                  <Link
                    to={slug}
                    className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
