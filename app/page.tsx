import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center space-y-6 text-center">
      <Image
        src="/snorPc.png"
        alt="Snorlax"
        width={640}
        height={640}
        className="h-auto w-full max-w-md"
        priority
      />
      <div className="inline-flex items-center rounded-xl border border-border/70 bg-foreground/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        24, Software Engineer ·{" "}
        <span className="ml-2 rounded-lg border border-foreground/30 px-2.5 py-1 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
          hustling to be a cracked Engineer
        </span>
      </div>
      <h1>hello world</h1>
    </section>
  );
}
