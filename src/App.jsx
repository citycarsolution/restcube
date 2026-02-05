import { Routes, Route } from "react-router-dom";
import RestCubeHeader from "./components/RestCubeHeader";
import Footer from "./components/Footer";

/* ================= HOME SECTIONS ================= */
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import Gallery from "./components/Gallery";
import FeaturesSection from "./components/FeaturesSection";
import AchievementsSection from "./components/AchievementsSection";
import CustomersSection from "./components/CustomersSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

/* ================= STATIC PAGES ================= */
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

/* ================= PRODUCT CATEGORY ================= */
import ProductCategoryPage from "./pages/ProductCategoryPage";

/* ================= PRODUCT DETAIL PAGES ================= */
import StainlessSteelToiletCubicle from "./pages/StainlessSteelToiletCubicle";
import PureSSCubicle from "./pages/PureSSCubicle";
import ShoeBoxToiletCubicle from "./pages/ShoeBoxToiletCubicle";
import CeilingHungCubicle from "./pages/CeilingHungCubicle";
import NylonToiletCubicle from "./pages/NylonToiletCubicle";
import GreySlateCubicle from "./pages/GreySlateCubicle";
import ChangingRoomCubicle from "./pages/ChangingRoomCubicle";
import PDDoorCubicle from "./pages/PDDoorCubicle";
import KidsToiletCubicle from "./pages/KidsToiletCubicle";

/* ================= SERVICE DETAIL ================= */
import ToiletCubicleInstallation from "./pages/ToiletCubicleInstallation";

/* ================= URINAL PARTITION OVERVIEW (FINAL) ================= */
import UrinalPartitionOverview from "./pages/UrinalPartitionOverview";

/* ================= SEO CITY × PRODUCT ================= */
import CityProductPage from "./pages/CityProductPage";

export default function App() {
  return (
    <>
      <RestCubeHeader />

      <main className="min-h-screen pt-16">
        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <ServicesSection />
                <Gallery />
                <FeaturesSection />
                <AchievementsSection />
                <CustomersSection />
                <BlogSection />
                <ContactSection />
              </>
            }
          />

          {/* ================= STATIC ================= */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ================= PRODUCT CATEGORY ================= */}
          <Route
            path="/products/:category"
            element={<ProductCategoryPage />}
          />

          {/* ================= PRODUCT DETAILS ================= */}
          <Route path="/stainless-steel-toilet-cubicle" element={<StainlessSteelToiletCubicle />} />
          <Route path="/pure-ss-cubicle" element={<PureSSCubicle />} />
          <Route path="/shoe-box-toilet-cubicle" element={<ShoeBoxToiletCubicle />} />
          <Route path="/ceiling-hung-cubicle" element={<CeilingHungCubicle />} />
          <Route path="/nylon-toilet-cubicle" element={<NylonToiletCubicle />} />
          <Route path="/grey-slate-cubicle" element={<GreySlateCubicle />} />
          <Route path="/changing-room-cubicle" element={<ChangingRoomCubicle />} />
          <Route path="/pd-door-cubicle" element={<PDDoorCubicle />} />
          <Route path="/kids-toilet-cubicle" element={<KidsToiletCubicle />} />

          {/* ================= SERVICE PAGES ================= */}
          <Route
            path="/services/toilet-cubicle-installation"
            element={<ToiletCubicleInstallation />}
          />

          {/* 🔥 IMPORTANT: URINAL PARTITION OVERVIEW */}
          <Route
            path="/services/urinal-partition-systems"
            element={<UrinalPartitionOverview />}
          />

          {/* ================= CITY × PRODUCT SEO ================= */}
          <Route
            path="/:productSlug-:citySlug"
            element={<CityProductPage />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}
