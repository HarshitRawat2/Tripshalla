import React from "react";
import HeroSlider from "../components/HeroSlider";
import GallerySection from "../components/GallerySection";
import ExploreSection from "../components/ExploreSection";
import TrendingSection from "../components/TrendingSection";
import BlogGridSection from "../components/BlogGridSection";
import ExploreMapSection from "../components/ExploreMapSection";
import RecommendSection from "../components/RecommendSection";
import PopularDestinations from "../components/PopularDestinations";
import ServiceCard from "../components/ServiceCard";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import ValuesSection from "../components/ValueSection";
import HowWeWork from "../components/HowWeWork";

export default function Aboutus() {
  return (
    <div className="space-y-10">
      <AboutHero />
      <WhoWeAre />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <HowWeWork />
      {/* <HeroSlider /> */}
      {/* <RecommendSection /> */}
      {/* <GallerySection /> */}
      {/* <PopularDestinations /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <ExploreMapSection/> */}
      {/* <BlogGridSection /> */}
    </div>
  );
}
