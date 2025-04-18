import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function RegistrationPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <span className={title({ color: "violet" })}>Registration</span>
          <div className={subtitle({ class: "mt-4" })}>
            NExT 2024 Workshop, Singapore
          </div>
        </div>

        <div className="max-w-3xl mt-8 border border-default-200 rounded-lg p-6">
          <div className="text-left">
            <p className="mb-4">
              Registration for the NExT 2024 Workshop is by invitation only. If you have received an invitation, please complete the registration form by clicking the button below.
            </p>
            
            <div className="flex justify-center mt-6 mb-6">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "md",
                  variant: "shadow",
                  size: "lg"
                })}
                href={siteConfig.links.registration}
              >
                Registration Form
              </Link>
            </div>
            
            <Divider className="my-4" />
            
            <p className="mb-4">
              After completing the registration form, you will receive a confirmation email with further details about the workshop, including accommodation options and program schedule.
            </p>
            
            <p>
              If you have any questions regarding registration, please contact the workshop organizers at <Link href="mailto:workshop@next-events.org" className="text-primary">workshop@next-events.org</Link>.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 