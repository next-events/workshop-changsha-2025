import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop";
import { title, subtitle } from "@/components/primitives";
import { SectionWrapper } from "@/components/SectionWrapper";

export function OrganizersSection() {
  const { layout, card } = styleConfig;
  const { organizers } = workshopConfig;
  
  // 确保颜色是有效的类型
  const titleColor = styleConfig.colors.title;

  return (
    <SectionWrapper id="organizers">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()} style={{ color: titleColor }}>
          {organizers.title}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {organizers.subtitle}
        </div>
      </div>

      <div className="w-full inline-block justify-center py-12">          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.people.map((person, index) => (
            <div key={index} className="col-span-1 h-20"
              style={{
                backgroundImage: `url(${person.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 