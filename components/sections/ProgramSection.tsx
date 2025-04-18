import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop";
import { title, subtitle } from "@/components/primitives";
import { SectionWrapper } from "@/components/SectionWrapper";

export function ProgramSection() {
  const { layout, card } = styleConfig;
  const { program } = workshopConfig;
  
  // 确保颜色是有效的类型
  const titleColor = styleConfig.colors.title;

  return (
    <SectionWrapper id="program">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()} style={{ color: titleColor }}>
          {program.title}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {program.subtitle}
        </div>
      </div>

      <div className={card.default}>
        <div className="text-center py-12">
          <p className="text-xl font-medium">{program.description}</p>
        </div>
      </div>
    </SectionWrapper>
  );
} 