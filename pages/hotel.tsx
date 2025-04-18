import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function HotelPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <span className={title({ color: "violet" })}>Hotel</span>
          <div className={subtitle({ class: "mt-4" })}>
            Accommodation Information
          </div>
        </div>

        <div className="max-w-3xl mt-8 border border-default-200 rounded-lg p-6">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">Recommended Hotel</h3>
            <p className="mb-4">
              The recommended hotel for the NExT 2024 Workshop is <strong>Park Avenue Rochester (31 Rochester Dr, Singapore 138637)</strong>.
            </p>
            
            <h3 className="text-xl font-bold mb-2 mt-6">Booking Information</h3>
            <p className="mb-4">
              To book your accommodation at Park Avenue Rochester, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Download the booking form</li>
              <li>Complete all required fields</li>
              <li>Send the completed form to the hotel&apos;s reservation department</li>
            </ol>
            
            <div className="flex justify-center mt-6 mb-6">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "md",
                  variant: "shadow",
                })}
                href="#"
              >
                Download Booking Form
              </Link>
            </div>
            
            <Divider className="my-4" />
            
            <h3 className="text-xl font-bold mb-2">Hotel Facilities</h3>
            <p className="mb-4">
              Park Avenue Rochester offers a range of amenities for your comfortable stay:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Free Wi-Fi</li>
              <li>Fitness center</li>
              <li>Swimming pool</li>
              <li>Restaurant and bar</li>
              <li>Business center</li>
              <li>24-hour front desk</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-2 mt-6">Location</h3>
            <p className="mb-4">
              The hotel is conveniently located with easy access to the workshop venue at NUS. The distance from the hotel to Innovation 4.0, NUS is approximately 3.5 kilometers.
            </p>
            
            <p>
              For any questions regarding accommodation, please contact the workshop organizers at <Link href="mailto:workshop@next-events.org" className="text-primary">workshop@next-events.org</Link>.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 