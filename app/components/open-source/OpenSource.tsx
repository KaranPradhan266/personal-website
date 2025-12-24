import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";

const logos = [
  {
    src: "/open-source-logo/Meta.png",
    alt: "Meta",
    url: "https://github.com/facebook/pyrefly",
  },
  {
    src: "/open-source-logo/microsoft.png",
    alt: "Microsoft",
    url: "https://github.com/microsoft/data-formulator",
  },
  {
    src: "/open-source-logo/supabase.png",
    alt: "Supabase",
    url: "https://github.com/supabase/stripe-sync-engine",
  },
  {
    src: "/open-source-logo/apache-rg.png",
    alt: "Apache",
    url: "https://github.com/apache/datafusion",
  },
    {
    src: "/open-source-logo/streamlit.png",
    alt: "Streamlit",
    url: "https://github.com/streamlit/streamlit",
  },
  {
    src: "/open-source-logo/bru.png",
    alt: "Bruno",
    url: "https://github.com/usebruno/bruno",
  },
  {
    src: "/open-source-logo/firefox-rg.png",
    alt: "Firefox",
    url: "https://github.com/firefox-devtools/profiler",
  },
  {
    src: "/open-source-logo/posthog-rg.png",
    alt: "PostHog",
    url: "https://github.com/PostHog/posthog",
  },
];

export default function OpenSource() {
  return (
    <section
      id="open-source"
      aria-label="Open source"
      className="space-y-6 text-left"
    >
      <h3 className="inline-block border-b-2 border-foreground/60 pb-1">
        Open Source Contributions
      </h3>
      <div className="flex items-start justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Open source is where I turn late-night debugging sessions into
          something useful for the rest of the internet.
        </p>
        <Image
          src="/coffee.png"
          alt="Coffee"
          width={70}
          height={70}
          className="shrink-0"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-[96px] items-center justify-center"
          >
            <LinkPreview
              url={logo.url}
              className="flex h-full items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={72}
                className="h-[72px] w-auto object-contain opacity-80"
              />
            </LinkPreview>
          </div>
        ))}
      </div>
    </section>
  );
}
