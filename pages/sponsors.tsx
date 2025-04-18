import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function SponsorsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <span className={title({ color: "violet" })}>Sponsors</span>
          <div className={subtitle({ class: "mt-4" })}>
            Event Partners
          </div>
        </div>

        <div className="max-w-3xl mt-8 border border-default-200 rounded-lg p-6">
          <div className="text-center py-12">
            <p className="text-xl font-medium">More details about the sponsors will be shared soon—stay tuned!</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 