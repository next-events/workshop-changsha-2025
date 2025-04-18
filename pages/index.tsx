import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { BackToTop } from "@/components/BackToTop";
import {
  IntroSection,
  RegistrationSection,
  HotelSection,
  ProgramSection,
  OrganizersSection,
  SponsorsSection,
  LocationSection
} from "@/components/sections";

export default function IndexPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <DefaultLayout>
      <IntroSection />
      
      <Divider className="my-8" />
      
      <RegistrationSection />
      
      <Divider className="my-8" />
      
      <HotelSection />
      
      <Divider className="my-8" />
      
      <ProgramSection />
      
      <Divider className="my-8" />
      
      <OrganizersSection />
      
      {/* <Divider className="my-8" />
      
      <SponsorsSection /> */}
      
      <Divider className="my-8" />
      
      <LocationSection />
      
      <BackToTop />
    </DefaultLayout>
  );
}
