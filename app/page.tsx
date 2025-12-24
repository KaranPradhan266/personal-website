import { Highlighter } from "@/components/ui/highlighter";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import OpenSource from "./components/open-source/OpenSource";
import { Contact } from "./components/contact/Contact";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center space-y-6 text-center">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-background">
        <video
          className="block h-auto w-full brightness-95"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hiro.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_right,black_0%,black_5%,transparent_15%,transparent_85%,black_95%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_5%,transparent_15%,transparent_85%,black_95%,black_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>
      <div className="flex w-full items-center justify-center rounded-xl border border-border/70 bg-foreground/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        24, Software Engineer ·{" "}
          <Highlighter action="highlight" color="#F59E0B">
          hustling to be a cracked Engineer
          </Highlighter>
      </div>
    </section>
    <About />
    <Experience />
    <OpenSource />
    <Contact />
    </>
  );
}
