"use client";

import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

type ExperienceModalProps = {
  title: string;
  designation: string;
  date: string;
  imageSrc?: string;
  imageAlt?: string;
  children: ReactNode;
  modalDescription: ReactNode;
  paragraphClassName?: string;
  after?: ReactNode;
};

const ExperienceModal = ({
  title,
  designation,
  date,
  imageSrc,
  imageAlt,
  children,
  modalDescription,
  paragraphClassName,
  after,
}: ExperienceModalProps) => {
  const trigger = (
    <ModalTrigger className="!px-0 !py-0 !rounded-none bg-transparent inline-flex align-text-bottom">
      <span className="sr-only">Open details</span>
      <ArrowUpRight
        className="inline-block size-4 text-[#EF4444]"
        aria-hidden="true"
      />
    </ModalTrigger>
  );

  const description =
    isValidElement(children) &&
    typeof children.type === "string" &&
    children.type === "p"
      ? (() => {
          const element = children as ReactElement<{
            className?: string;
            children?: ReactNode;
          }>;
          return cloneElement(element, {
            className: cn(
              "text-base font-normal text-muted-foreground md:text-lg",
              paragraphClassName,
              element.props.className
            ),
            children: (
              <>
                {element.props.children} {trigger}
              </>
            ),
          });
        })()
    : (
        <p
          className={cn(
            "text-base font-normal text-muted-foreground md:text-lg",
            paragraphClassName
          )}
        >
          {children} {trigger}
        </p>
      );

  return (
    <Modal>
      <div>
        {description}
        {after}
        <ModalBody className="text-left">
          <ModalContent className="gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-sm object-cover"
                  loading="lazy"
                />
              ) : null}
              <h3 className="text-lg md:text-3xl font-semibold text-muted-foreground">
                {title}
              </h3>
            </div>
            <span className="mt-2 inline-flex self-start rounded-md bg-orange-200/20 px-2 py-0.5 text-sm font-medium text-orange-200">
              {date}
            </span>
            <span className="mt-2 block text-sm font-medium text-[#F59E0B]">
              {designation}
            </span>
            <div className="mt-4 text-justify text-base">
              <p
                className={cn(
                  "whitespace-pre-line text-base font-normal text-muted-foreground md:text-lg",
                  paragraphClassName
                )}
              >
                {modalDescription}
              </p>
            </div>
          </ModalContent>
        </ModalBody>
      </div>
    </Modal>
  );
};

const data = [
  {
    title: "SCU Frugal Innovation Hub",
    designation: "Research Assistant",
    date: "April 2025 - Present",
    imageSrc: "/scu_icon.jpeg",
    imageAlt: "Santa Clara University",
    content: (
      <ExperienceModal
        title="SCU Frugal Innovation Hub"
        designation="Research Assistant"
        date="April 2025 - Present"
        imageSrc="/scu_icon.jpeg"
        imageAlt="Santa Clara University"
        paragraphClassName="mb-8"
        modalDescription={"I joined the Frugal Innovation Hub to build software that could survive the real world — slow networks, limited budgets, and non-technical users — not just perfect lab conditions. \n\nI designed and scaled Java and Spring Boot backends that power tools used by students and nonprofits, optimizing everything around speed, cost, and reliability. \n\nBy introducing Brotli compression, smart caching layers, and performance-first APIs, I reduced response sizes and latency by roughly 30%, making the platform usable even in low-bandwidth regions.\n\n I worked directly with program managers and field teams to translate messy real-world needs into shipped features, and deployed the entire stack on AWS (EC2/Fargate) using Docker — cutting hosting costs by about 40% while keeping the systems simple, resilient, and easy to maintain."}
        after={<div className="grid grid-cols-2 gap-4" />}
      >
        <p>Joined to build software that had to work outside the classroom, under real constraints and real expectations. Spent time turning loosely defined ideas into products people could actually use. Learned to care deeply about simplicity, speed, and cost because they mattered to the end users. Found a lot of meaning in seeing something I built deployed and used in the real world.</p>
      </ExperienceModal>
    ),
  },
  {
    title: "Thomson Reuters",
    designation: "Software Engineer",
    date: "July 2022 - August 2023",
    imageSrc: "/TR.png",
    imageAlt: "Thomson Reuters",
    content: (
      <ExperienceModal
        title="Thomson Reuters"
        designation="Software Engineer"
        date="July 2022 - August 2023"
        imageSrc="/TR.png"
        imageAlt="Thomson Reuters"
        paragraphClassName="mb-8"
        modalDescription={"This role put me inside high-throughput production systems where performance issues showed up immediately — and had real consequences. I optimized document-processing pipelines using Redis caching and faster JSON serialization, reducing processing time under load by around 40%. \n \n I built Kafka-based microservices with Dead Letter Queues to isolate failures and keep critical workflows running safely, and introduced Datadog APM, dashboards, and alerting, cutting on-call escalations by roughly 40%. \n\n I also prototyped and shipped a GPT-powered tax expense mapping system, integrating it into a Chrome extension that reduced manual review from minutes to seconds. This role sharpened my instincts for building fast systems that stay stable in production."}
      >
        <p>Worked on systems where small problems quickly became visible to customers. Learned how to improve performance by fixing root causes rather than patching symptoms. Gained strong exposure to production environments, monitoring, and failure handling. Built confidence shipping changes that had immediate and measurable impact.</p>
      </ExperienceModal>
    ),
  },
  {
    title: "Thomson Reuters",
    designation: "Software Engineering Intern",
    date: "January 2022 - June 2022",
    imageSrc: "/TR.png",
    imageAlt: "TR",
    content: (
      <ExperienceModal
        title="Thomson Reuters"
        designation="Software Engineering Intern"
        date="January 2022 - June 2022"
        imageSrc="/TR.png"
        imageAlt="TR"
        paragraphClassName="mb-4"
        modalDescription={"At Thomson Reuters, I worked on internal platforms used daily across multiple teams, building features that quietly improved productivity at enterprise scale. \n \n I developed Python and SQL automation pipelines to streamline revenue analytics and reduce manual effort, and built a Spring Boot service that deep-linked users directly to invalid form fields — improving engagement by about 10% by eliminating frustrating search workflows. \n \n I also implemented SAML-based SSO to enable seamless authentication across internal tools, gaining hands-on experience with secure enterprise identity flows, clean API design, and building backend systems that save real teams thousands of hours."}
      >
        <p>Got my first taste of building software inside a large, global organization. Focused on removing friction from everyday workflows rather than building flashy features. Learned how internal tools quietly shape productivity at scale. Left with a strong appreciation for clean design and thoughtful engineering.</p>
      </ExperienceModal>
    ),
  },
  {
    title: "Charusat University",
    designation: "Research Intern — Natural Language Processing",
    date: "May 2021 - July 2021",
    imageSrc: "/charusat_icon.jpeg",
    imageAlt: "charusat",
    content: (
      <ExperienceModal
        title="Charusat University"
        designation="Research Intern — Natural Language Processing"
        date="May 2021 - July 2021"
        imageSrc="/charusat_icon.jpeg"
        imageAlt="charusat"
        paragraphClassName="mb-4"
        modalDescription={"As an NLP research intern, I fine-tuned transformer models including BERT, XLNet, and GPT-2 for both abstractive and extractive summarization. By improving tokenization strategies and building stronger evaluation pipelines, I achieved an approximately 18% improvement in ROUGE-L scores. \n \n I then turned the research into a browser-based tool that let users generate, compare, and quality-check summaries using ROUGE metrics and grammar analysis, cutting manual review effort by around 60%. This role taught me how to move beyond model training and build ML systems people could actually use."}
      >
        <p>Explored how language models behave in practice, beyond benchmarks and papers. Spent time iterating, evaluating results, and questioning what “good output” really means. Built simple tools to make experimentation easier and more transparent. Learned to balance research curiosity with practical usefulness.</p>
      </ExperienceModal>
    ),
  },
  {
    title: "Charusat University",
    designation: "Research Intern — Computer Vision",
    date: "Jan 2021 - March 2021",
    imageSrc: "/charusat_icon.jpeg",
    imageAlt: "charusat",
    content: (
      <ExperienceModal
        title="Charusat University"
        designation="Research Intern — Computer Vision"
        date="Jan 2021 - March 2021"
        imageSrc="/charusat_icon.jpeg"
        imageAlt="charusat"
        paragraphClassName="mb-4"
        modalDescription={"In this early research role, I worked on medical and satellite image-fusion pipelines using DWT and DCT techniques, implementing experiments in OpenCV and MATLAB to enhance feature extraction and improve image clarity. \n \n I evaluated multiple fusion strategies, built repeatable experimental pipelines, and developed strong foundations in signal processing, numerical methods, and empirical evaluation — gaining early exposure to applying theoretical computer vision concepts to real-world imaging problems."}
      >
        <p>Started my journey into applied research through hands-on experimentation. Worked with real image data and saw how theory translates into visual results. Learned patience through trial, error, and gradual improvement. Built a strong foundation in analytical thinking and problem solving.</p>
      </ExperienceModal>
    ),
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [calloutActive, setCalloutActive] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasTriggeredRef.current) {
          return;
        }

        hasTriggeredRef.current = true;
        timeoutId = setTimeout(() => {
          setCalloutActive(true);
        }, 2000);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Experience"
      className="space-y-4 text-left"
    >
      <h3 className="inline-block border-b-2 border-foreground/60 pb-1">
        Experience
      </h3>
      <div className="relative w-full">
        <div
          className={`pointer-events-none absolute left-0 top-50 z-10 hidden -translate-x-40 items-center gap-2 text-foreground/70 transition-opacity duration-700 md:flex ${
            calloutActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <TextGenerateEffect
            words="My current job!"
            isActive={calloutActive}
            className="-rotate-2 font-normal [font-family:var(--font-handwritten)]"
            wrapperClassName="mt-0"
            textClassName="text-2xl leading-none tracking-normal text-foreground/70"
            wordClassName="text-foreground/70"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 120 32"
            className={`h-5 w-24 -rotate-6 text-foreground/60 transition-opacity duration-500 delay-150 ${
              calloutActive ? "opacity-100" : "opacity-0"
            }`}
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
