import { useEffect, useState } from "react";

// HERO IMAGES (VITE SAFE)
import hero1 from "../assets/hero/hero-mumbai-toilet-cubicle.jpg";
import hero2 from "../assets/hero/hero-commercial-restroom.jpg";
import hero3 from "../assets/hero/hero-premium-cubicle.jpg";
import hero4 from "../assets/hero/hero-grey-and-slate-grey.jpg";
import hero5 from "../assets/hero/hero-smokey-grey-nylon.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sendWhatsApp = () => {
    const phone = "91XXXXXXXXXX";
    const msg = encodeURIComponent(
      "Hello, I am interested in Toilet Cubicle Solutions in Mumbai. Please contact me."
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    // 🔥 FIX: header gap remove
    <section className="relative h-[90vh] w-full overflow-hidden -mt-20">
      {/* BACKGROUND SLIDER */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 w-full items-center">
          {/* LEFT */}
          <div>
            <p className="text-red-500 font-semibold mb-2 tracking-wide">
              Premium Restroom Solutions
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              Toilet Cubicle Solutions <br />
              <span className="text-red-500">in Mumbai</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              High-quality restroom cubicle partition systems for offices,
              malls, hospitals, airports & commercial spaces.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              {[
                "10+ Years Experience",
                "Pan-India Projects",
                "Premium Quality Materials",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white/20 backdrop-blur-lg border border-white/30
                             px-4 py-2 rounded-full text-sm font-semibold text-white"
                >
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="rounded-3xl p-8 max-w-md ml-auto w-full
                       bg-white/20 backdrop-blur-2xl
                       border border-white/30
                       shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Get Free Quotation / Site Visit
            </h3>
            <p className="text-sm text-gray-200 mb-6">
              Our expert will contact you shortly
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg px-4 py-3 bg-white/70"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg px-4 py-3 bg-white/70"
              />

              <select className="w-full rounded-lg px-4 py-3 bg-white/70">
                <option>Mumbai</option>
                <option>Thane</option>
                <option>Pune</option>
                <option>Bangalore</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Nashik</option>
              </select>

              <button
                type="button"
                onClick={sendWhatsApp}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                📲 Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
