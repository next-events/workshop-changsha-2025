import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function LocationPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <span className={title({ color: "violet" })}>Location</span>
          <div className={subtitle({ class: "mt-4" })}>
            Venue Information
          </div>
        </div>

        <div className="max-w-3xl mt-8 border border-default-200 rounded-lg p-6">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">Workshop Venue</h3>
            <p className="mb-4">
              The NExT 2024 Workshop will be held at <strong>Innovation 4.0, NUS (3 Research Link, Singapore 117602)</strong>.
            </p>
            
            <ul className="list-none space-y-2 mb-6">
              <li><strong>AI Policy Workshop (Dec 2-3):</strong> NUS campus (exact location to be confirmed)</li>
              <li><strong>NExT Workshop (Dec 4-5):</strong> Level 01-03 Seminar Room, Innovation 4.0, NUS</li>
              <li><strong>Discussion Session (Dec 6):</strong> Level 01-03 Seminar Room, Innovation 4.0, NUS</li>
            </ul>
            
            <div className="flex justify-center mt-6 mb-6">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "md",
                  variant: "shadow",
                })}
                href="https://maps.app.goo.gl/iMxs3mUwH3tA3kkY7"
                target="_blank"
              >
                View on Google Maps
              </Link>
            </div>
            
            <Divider className="my-4" />
            
            <h3 className="text-xl font-bold mb-2">Getting There</h3>
            <p className="mb-4">
              Innovation 4.0 is located within the National University of Singapore campus.
            </p>
            
            <h4 className="text-lg font-semibold mb-2 mt-4">By Public Transport:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Take the Circle Line (CC) to Kent Ridge MRT Station (CC24)</li>
              <li>Exit A, then take NUS Internal Shuttle Bus D2 to Innovation 4.0</li>
              <li>Alternatively, it&apos;s approximately a 15-minute walk from Kent Ridge MRT</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2 mt-4">By Taxi/Grab:</h4>
            <p className="mb-4">
              Request to be dropped off at Innovation 4.0, 3 Research Link, NUS. Inform the driver it is located near the School of Computing.
            </p>
            
            <h4 className="text-lg font-semibold mb-2 mt-4">By Car:</h4>
            <p className="mb-4">
              Limited parking is available at Innovation 4.0 and nearby car parks. Enter via Kent Ridge Crescent.
            </p>
            
            <h3 className="text-xl font-bold mb-2 mt-6">Nearby Amenities</h3>
            <p className="mb-4">
              Within the NUS campus, you&apos;ll find:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Various food courts and cafes</li>
              <li>NUS Co-op and convenience stores</li>
              <li>ATMs and banking facilities</li>
            </ul>
            
            <p>
              For any questions regarding the venue or directions, please contact the workshop organizers at <Link href="mailto:workshop@next-events.org" className="text-primary">workshop@next-events.org</Link>.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 