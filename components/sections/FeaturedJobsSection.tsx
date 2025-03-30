import { jobListings } from "@/constants/jobsData";
import { Container } from "../shared/Container";
import SectionIntro from "../shared/SectionIntro";
// import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FadeIn } from "../shared/FadeIn";

export default function FeaturedJobsSection() {
  return (
    <section className="">
      <Container>
        <SectionIntro
          title="Featured Jobs"
          paragraph="Know your worth and find the job that qualify your life."
        />

        <FadeIn className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {jobListings.map((job) => (
            <a
              key={job.href}
              href={job.href}
              className="flex items-center gap-4 border border-slate-200 p-5 rounded-lg  transition"
            >
              {/* Company Logo */}
              <Image
                src={job.companyLogo}
                alt={job.companyName}
                width={50}
                height={50}
                className=" rounded-full"
              />

              {/* Job Details */}
              <div className="flex flex-col">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  {job.title}
                  {job.isFeatured && (
                    <span className="text-green-500 text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {job.categories.join(", ")}
                </p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm font-semibold text-gray-800">
                  {job.salaryRange}
                </p>

                {/* Job Tags */}
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    {job.employmentType}
                  </span>
                  {job.isUrgent && (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                      Urgent
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
