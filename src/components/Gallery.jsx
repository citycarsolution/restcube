// src/components/Gallery.jsx

export default function Gallery() {
  return (
    <section className="py-24 bg-[#f4f4f4]" id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold">
            Project <span className="text-red-600">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Watch real on-site toilet cubicle & restroom partition projects
            executed by RestCube across India. All videos are loaded directly
            from our official YouTube channel.
          </p>
        </div>

        {/* YOUTUBE AUTO-LOAD (CHANNEL FEED) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=restcubecubicle"
            title="RestCube Project Gallery Videos"
            className="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@restcubecubicle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            ▶ View All Videos on YouTube
          </a>
        </div>

      </div>
    </section>
  );
}
