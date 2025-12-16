import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import VidyajeevanSection from "@/components/vidyajeevan-section";
import HorizontalAccordionSection from "@/components/horizontal-accordion-section";
import RoadmapSection from "@/components/roadmap-section";
import ReviewsSection from "@/components/reviews-section";
import Footer from "@/components/footer";

const mentorshipApproach = [
  {
    id: 1,
    title: "Personalized Learning",
    subtitle: "Tailored to Your Goals",
    description:
      "Every student is unique. We create customized learning paths that align with your individual aspirations, learning style, and career objectives.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Holistic Development",
    subtitle: "Beyond Academics",
    description:
      "We focus on developing critical thinking, problem-solving skills, emotional intelligence, and leadership qualities alongside academic excellence.",
    icon: "🌟",
  },
  {
    id: 3,
    title: "Continuous Support",
    subtitle: "Every Step of the Way",
    description:
      "From initial consultation to career placement and beyond, we provide unwavering support and guidance throughout your educational journey.",
    icon: "🤝",
  },
  {
    id: 4,
    title: "Real-World Skills",
    subtitle: "Industry Ready",
    description:
      "Learn practical skills that matter in the real world. Our curriculum is designed in collaboration with industry experts to ensure market relevance.",
    icon: "💼",
  },
];

const successStories = [
  {
    id: 1,
    title: "Academic Excellence",
    subtitle: "Top Performers",
    description:
      "Our students consistently achieve top ranks in competitive examinations and secure admissions to premier institutions worldwide.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Career Growth",
    subtitle: "Dream Placements",
    description:
      "Students mentored by Dr. Ravi Sharma have landed positions at leading companies with impressive salary packages and career trajectories.",
    icon: "📈",
  },
  {
    id: 3,
    title: "Personal Transformation",
    subtitle: "Confident Leaders",
    description:
      "Beyond grades and placements, students develop into confident, articulate individuals ready to make a positive impact in their chosen fields.",
    icon: "✨",
  },
  {
    id: 4,
    title: "Lifelong Learning",
    subtitle: "Continued Success",
    description:
      "The mentorship doesn't end with placement. Our alumni continue to grow and achieve new milestones throughout their professional journeys.",
    icon: "🎓",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VidyajeevanSection />
      <HorizontalAccordionSection
        items={mentorshipApproach}
        title="Our Mentorship Approach"
      />
      <RoadmapSection />
      <HorizontalAccordionSection
        items={successStories}
        title="Success Stories & Impact"
      />
      <ReviewsSection />
      <Footer />
    </>
  );
}
