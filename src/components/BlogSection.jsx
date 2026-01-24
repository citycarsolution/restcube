const blogs = [
  {
    title: "How to Choose the Right Toilet Cubicle Material?",
    date: "Dec 2025",
  },
  {
    title: "Stainless Steel vs Phenolic Cubicles – Which is Better?",
    date: "Nov 2025",
  },
  {
    title: "Best Restroom Design Practices for Commercial Spaces",
    date: "Oct 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Latest <span className="text-red-600">Blogs</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Insights, guides & expert tips on restroom cubicle systems and
          commercial washroom design.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-6"
            >
              <span className="text-sm text-gray-400">{b.date}</span>
              <h3 className="font-bold mt-3 mb-4">{b.title}</h3>
              <button className="text-red-600 font-semibold text-sm">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
