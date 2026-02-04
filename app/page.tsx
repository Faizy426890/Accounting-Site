import HeroSection from "@/components/HeroSection"; 
import ServicesSection from "@/components/Services"; 
import AccountingHero from "@/components/Image-Section"; 
import AccountingExpertise from "@/components/WhyChoose";  
import AchievementSection from "@/components/Numbers";
import AccountingProcess from "@/components/Works"; 
import Footer from "@/components/Footer";
export default function Home() {
  return ( 
    <>
     <HeroSection/>  
     <ServicesSection/>  
     <AccountingHero/>  
     <AccountingExpertise/> 
     <AccountingProcess/> 
     <AchievementSection/> 
     <Footer/>
     </>
  );
}
