import Image from "next/image";

const logos = [
  { src: "/open-source-logo/meta.png", alt: "Meta" },
  { src: "/open-source-logo/microsoft.png", alt: "Microsoft" },
  { src: "/open-source-logo/supabase.png", alt: "Supabase" },
  { src: "/open-source-logo/apache-rg.png", alt: "Apache" },
  { src: "/open-source-logo/bruno-rg.png", alt: "Bruno" },
  { src: "/open-source-logo/firefox-rg.png", alt: "Firefox" },
  { src: "/open-source-logo/posthog-rg.png", alt: "PostHog" },
];

export default function OpenSource() {
  return (
    <section aria-label="Open source" className="space-y-6 text-left">
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
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={72}
              className="h-[72px] w-auto object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
