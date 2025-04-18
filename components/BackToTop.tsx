import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { styleConfig } from "@/config/styles";

export function BackToTop() {
  const { button } = styleConfig;
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

  if (!showBackToTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="flat"
      className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg"
      size="sm"
    >
      ↑ Top
    </Button>
  );
} 