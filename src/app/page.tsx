import Brands from "@/components/brands/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jobs from "@/components/jobs/Jobs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Jobs />
      <Footer />
    </div>
  );
}
