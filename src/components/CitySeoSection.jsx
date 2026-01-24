const cities = [
  {
    name: "Mumbai",
    desc:
      "RestCube is a leading toilet cubicle manufacturer in Mumbai, providing premium stainless steel, nylon and HPL toilet cubicle systems for malls, offices, airports and hospitals.",
  },
  {
    name: "Pune",
    desc:
      "We supply high-quality commercial toilet cubicles in Pune with durable materials, modern design and professional installation for IT parks and commercial spaces.",
  },
  {
    name: "Bangalore",
    desc:
      "RestCube offers modern toilet cubicle solutions in Bangalore including PD door cubicles, kids toilet cubicles and premium restroom partitions.",
  },
];

export default function CitySeoSection() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SEO Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-6">
          Toilet Cubicle Manufacturer in <span className="text-red-600">India</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          RestCube delivers premium restroom cubicle solutions across major Indian cities.
          Our commercial toilet cubicles are designed for durability, hygiene and modern aesthetics.
        </p>

        {/* CITY BLOCKS */}
        <div className="grid md:grid-cols-3 gap-10">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
            >
              <h3 className="text-xl font-bold mb-3">
                Toilet Cubicle in {city.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {city.desc}
              </p>

              <a
                href={`/toilet-cubicle-${city.name.toLowerCase()}`}
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                View Services in {city.name} →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
