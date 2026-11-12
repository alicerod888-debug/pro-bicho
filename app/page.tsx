import About from "@/components/About";
import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Emergency from "@/components/Emergency";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PetCenter from "@/components/PetCenter";
import Services from "@/components/Services";
import Structure from "@/components/Structure";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero /><Differentials /><Services /><About /><Team /><Structure /><PetCenter /><Testimonials /><Emergency /><Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
