import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop"; 
import { title, subtitle } from "@/components/primitives";
import { SectionWrapper } from "@/components/SectionWrapper";

export function HotelSection() {
  const { layout, card, button } = styleConfig;
  const { hotel, contactEmail } = workshopConfig;
  
  // 确保颜色是有效的类型
  const titleColor = styleConfig.colors.title;

  return (
    <SectionWrapper id="hotel">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()} style={{ color: titleColor }}>
          {hotel.title}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {hotel.subtitle}
        </div>
      </div>

      <div className={card.default}>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">Recommended Hotel</h3>
          <p className="mb-4">
            <strong>{hotel.name} {hotel.address}</strong>.
          </p>
          
          
          
          <Divider className="my-4" />
          
          <p>
            For any questions regarding accommodation, please contact the workshop organizers at <Link href={`mailto:${contactEmail}`} className="text-primary">{contactEmail}</Link>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
} 