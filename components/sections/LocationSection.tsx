import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { styleConfig } from "@/config/styles";
import { workshopConfig } from "@/config/workshop";
import { title, subtitle } from "@/components/primitives";

export function LocationSection() {
  const { layout, card, button } = styleConfig;
  const { location, contactEmail } = workshopConfig;
  
  // 确保颜色是有效的类型
  const titleColor = styleConfig.colors.title;

  return (
    <section id="location" className={layout.section}>
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()} style={{ color: titleColor }}>
          {location.title}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {location.subtitle}
        </div>
      </div>

      <div className={card.default}>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">Workshop Venue</h3>
          <p className="mb-4">
            The NExT 2025 Workshop will be held at <strong>{location.name} ({location.address})</strong>.
          </p>
          
          
          <div className="flex justify-center mt-6 mb-6">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "md",
                variant: button.primary.variant,
              })}
              href={location.mapUrl}
              target="_blank"
            >
              {location.buttonText}
            </Link>
          </div>
          
          <Divider className="my-4" />
          
          <h3 className="text-xl font-bold mb-2">Getting There</h3>
          <p>TBD. More details will be shared soon—stay tuned!</p>
          {/*<p className="mb-4">
            {location.name}
          </p>
          
          <h4 className="text-lg font-semibold mb-2 mt-4">By Public Transport:</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {location.transport.publicTransport.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h4 className="text-lg font-semibold mb-2 mt-4">By Taxi/Grab:</h4>
           <p className="mb-4">
            {location.transport.taxi}
          </p>
          
          <h4 className="text-lg font-semibold mb-2 mt-4">By Car:</h4>
          <p className="mb-4">
            {location.transport.car}
          </p>
          
          <h3 className="text-xl font-bold mb-2 mt-6">Nearby Amenities</h3>
          <p className="mb-4">
            Within the NUS campus, you&apos;ll find:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {location.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          
          <p>
            For any questions regarding the venue or directions, please contact the workshop organizers at <Link href={`mailto:${contactEmail}`} className="text-primary">{contactEmail}</Link>.
          </p> */}
        </div>
      </div>
    </section>
  );
} 