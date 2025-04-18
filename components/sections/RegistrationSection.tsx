import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop";
import { title, subtitle } from "@/components/primitives";
import { SectionWrapper } from "@/components/SectionWrapper";

export function RegistrationSection() {
  const { colors, layout, card, button } = styleConfig;
  const { registration, contactEmail } = workshopConfig;
  
  // 确保颜色是有效的类型
  const titleColor = styleConfig.colors.title;

  return (
    <SectionWrapper id="registration">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()} style={{ color: titleColor }}>
          {registration.title}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {registration.subtitle}
        </div>
      </div>

      <div className={card.default}>
        <div className="text-left">
          <p className="mb-4">
            {registration.description}
          </p>
          
          <div className="flex justify-center mt-6 mb-6">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "md",
                variant: button.primary.variant,
                size: "lg"
              })}
              href={siteConfig.links.registration}
            >
              {registration.buttonText}
            </Link>
          </div>
          
          <Divider className="my-4" />
          
          <p className="mb-4">
            {registration.confirmation}
          </p>
          
          <p>
            If you have any questions regarding registration, please contact the workshop organizers at <Link href={`mailto:${contactEmail}`} className="text-primary">{contactEmail}</Link>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
} 