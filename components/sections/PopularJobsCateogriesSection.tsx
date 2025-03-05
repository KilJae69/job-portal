import { jobCategories } from "@/constants/jobCategories";
import { Container } from "../shared/Container";
// import { Link } from "@/i18n/routing";
import SectionIntro from "../shared/SectionIntro";

export default function PopularJobsCateogriesSection() {
  return (
    <section className="pt-12 lg:pt-24">
      <Container>
        <SectionIntro
          title="Popular Job Categories"
          paragraph="2020 jobs live - 293 added today."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {jobCategories.map(({ href, title, numPositions, icon: Icon }) => (
            <a
              key={title}
              href={href}
              className="flex group hover:-translate-y-1 hover:shadow-md transition-all duration-500 items-center gap-4 border p-5 rounded-lg border-slate-200"
            >
              <div className="size-14 bg-slate-200 duration-500 group-hover:bg-blue-500 transition-colors rounded-lg flex items-center justify-center">
                <Icon className="text-blue-500 w-10 h-10 duration-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 duration-500 group-hover:text-blue-500">
                  {title}
                </h3>
                <p className="text-sm text-slate-400">
                  {numPositions} open positions
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
