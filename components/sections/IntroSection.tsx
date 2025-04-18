import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SectionWrapper } from "@/components/SectionWrapper";

export function IntroSection() {
  const { layout, card } = styleConfig;
  const { title: workshopTitle, subtitle: workshopSubtitle, date, introduction } = workshopConfig;
  
  const titleColor = styleConfig.colors.title;

  return (
    <SectionWrapper id="intro">
      <div className="flex flex-col items-center w-full text-center justify-center h-80"
        style={{
          backgroundImage: "url('/banner_yuelu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white !important" 
        }}
      >
        <span className={title({ class: "text-shadow-lg" })}>
          {workshopTitle}
        </span>
        <br />
        <div className={subtitle({ class: "mt-4 text-white font-bold text-shadow-sm" })}>
          {workshopSubtitle}
        </div>
        <div className={subtitle({ class: "mt-2 text-white font-bold text-shadow-sm" })}>
          {date}
        </div>
      </div>

      <div className={card.borderless}>
        <div className="text-left">
          <p className="mb-4">
            {introduction.description}
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {introduction.activities.map((activity, index) => (
              <li key={index}>
                <strong>{activity.date}</strong>: {activity.title}, {activity.description}
              </li>
            ))}
          </ul>
          <p className="mb-4">
            {introduction.venue}
          </p>
          <p>
            {introduction.participation}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
} 