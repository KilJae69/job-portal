
import JobSearchForm from "@/components/forms/JobSearchForm";

import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const keyword = params.keyword || ""; // Default to empty string
  const location = params.location || ""; // Default to empty string
  return (
    <>
      <PageIntro title="Jobs" />
      <Container className="my-12 lg:my-24">
        <JobSearchForm keyword={keyword} location={location} />
      </Container>
    </>
  );
}
