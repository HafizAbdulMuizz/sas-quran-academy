import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import TrialSection from "@/components/TrialSection";
import AdmissionForm from "@/components/AdmissionForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import WhatsAppButton from "@/components/WhatsAppButton";
export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Courses />

      <Features />

      <TrialSection />

      <AdmissionForm />

      <Contact />

      <Footer />
<WhatsAppButton />
    </main>
  );
}