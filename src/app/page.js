import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import HomeBanner from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Home() {
    return (
      <div>
        <HomeBanner />
        <FeatureSection />
        <ActionSection />
        {/* <TestimonialSection /> */}
        <ContactForm />
      </div>
    )
}
