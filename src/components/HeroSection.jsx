import { useEffect, useState } from "react";

// HERO IMAGES
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
    <section className="relative min-h-screen w-full overflow-hidden">
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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center py-20">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-red-500 font-semibold mb-2">
              Premium Restroom Solutions
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              Toilet Cubicle Solutions <br />
              <span className="text-red-500">in Mumbai</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
              High-quality restroom cubicle partition systems for offices,
              malls, hospitals, airports & commercial spaces.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap justify-center lg:justify-start">
              {[
                "10+ Years Experience",
                "Pan-India Projects",
                "Premium Quality Materials",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white/20 backdrop-blur-lg border border-white/30
                             px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white"
                >
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>

          {/* FORM CARD */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm sm:max-w-md rounded-3xl p-6 sm:p-8
                         bg-white/20 backdrop-blur-2xl
                         border border-white/30
                         shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 text-center">
                Get Free Quotation / Site Visit
              </h3>
              <p className="text-sm text-gray-200 mb-5 text-center">
                Our expert will contact you shortly
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg px-4 py-3 bg-white/80 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg px-4 py-3 bg-white/80 focus:outline-none"
                />

                <select className="w-full rounded-lg px-4 py-3 bg-white/80 focus:outline-none">
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
                  className="w-full bg-red-600 hover:bg-red-700
                             text-white py-3 rounded-lg font-semibold transition"
                >
                  📲 Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
