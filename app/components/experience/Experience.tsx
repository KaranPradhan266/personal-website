import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "SCU Frugal Innovation Hub",
    designation: "Research Assistant",
    date: "April 2025 - Present",
    imageSrc: "/scu_icon.jpeg",
    imageAlt: "Santa Clara University",
    content: (
      <div>
        <p className="mb-8 text-base font-normal text-muted-foreground md:text-lg">
        Joined to build software that had to work outside the classroom, under real constraints and real expectations.
Spent time turning loosely defined ideas into products people could actually use.
Learned to care deeply about simplicity, speed, and cost because they mattered to the end users.
Found a lot of meaning in seeing something I built deployed and used in the real world.</p>
        <div className="grid grid-cols-2 gap-4">
    
        </div>
      </div>
    ),
  },
  {
    title: "Thomson Reuters",
    designation: "Software Engineer",
    date: "July 2022 - August 2023",
    imageSrc: "/TR.png",
    imageAlt: "Thomson Reuters",
    content: (
      <div>
        <p className="mb-8 text-base font-normal text-muted-foreground md:text-lg">
        Worked on systems where small problems quickly became visible to customers.
        Learned how to improve performance by fixing root causes rather than patching symptoms.
        Gained strong exposure to production environments, monitoring, and failure handling.
        Built confidence shipping changes that had immediate and measurable impact.
        </p>
      </div>
    ),
  },
  {
    title: "Thomson Reuters",
    designation: "Software Engineering Intern",
    date: "January 2022 - June 2022",
    imageSrc: "/TR.png",
    imageAlt: "TR",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-muted-foreground md:text-lg">
        Got my first taste of building software inside a large, global organization.
Focused on removing friction from everyday workflows rather than building flashy features.
Learned how internal tools quietly shape productivity at scale.
Left with a strong appreciation for clean design and thoughtful engineering.
        </p>
      </div>
    ),
  },
  {
    title: "Charusat University",
    designation: "Research Intern — Natural Language Processing",
    date: "May 2021 - July 2021",
    imageSrc: "/charusat_icon.jpeg",
    imageAlt: "charusat",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-muted-foreground md:text-lg">
          Explored how language models behave in practice, beyond benchmarks and papers.
          Spent time iterating, evaluating results, and questioning what “good output” really means.
          Built simple tools to make experimentation easier and more transparent.
          Learned to balance research curiosity with practical usefulness.
        </p>
      </div>
    ),
  },
  {
    title: "Charusat University",
    designation: "Research Intern — Computer Vision",
    date: "Jan 2021 - March 2021",
    imageSrc: "/charusat_icon.jpeg",
    imageAlt: "charusat",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-muted-foreground md:text-lg">
          Started my journey into applied research through hands-on experimentation.
          Worked with real image data and saw how theory translates into visual results.
          Learned patience through trial, error, and gradual improvement.
          Built a strong foundation in analytical thinking and problem solving.
        </p>
      </div>
    ),
  },
];

export default function Experience() {
  return (
    <section aria-label="Experience" className="space-y-4 text-left">
      <h3 className="inline-block border-b-2 border-foreground/60 pb-1">
        Experience
      </h3>
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-50 z-10 hidden -translate-x-40 items-center gap-2 text-foreground/70 md:flex">
          <span
            className="-rotate-2 text-2xl leading-none"
            style={{ fontFamily: "var(--font-handwritten)" }}
          >
            My current job!
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 120 32"
            className="h-5 w-24 -rotate-6 text-foreground/60"
            fill="none"
          >
            <path
              d="M2 24 C 36 6, 72 6, 108 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M108 16 L100 10 M108 16 L100 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}
