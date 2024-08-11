import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LastSection from "@/components/LastSection";
import MovingCards from "@/components/ui/MovingCards";
import Upcoming from "@/components/Upcoming";


export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        {/* <ChooseUs/> */}
        <MovingCards/>
        <Upcoming/>
        <LastSection/>
        <Footer/>

    </main>
  );
}
