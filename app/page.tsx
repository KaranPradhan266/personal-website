import Image from "next/image";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import { Contact } from "./components/contact/Contact";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center space-y-6 text-center">
      <Image
        src="/hiro.png"
        alt="hiro.png"
        width={800}
        height={800}
        className="h-auto w-full max-w-xl rounded-2xl brightness-95 drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] [mask-image:radial-gradient(circle,#000_68%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle,#000_68%,transparent_100%)]"
        priority
      />
      <div className="flex w-full items-center justify-center rounded-xl border border-border/70 bg-foreground/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        24, Software Engineer ·{" "}
        <span className="ml-2 rounded-lg border border-foreground/30 px-2.5 py-1 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
          hustling to be a cracked Engineer
        </span>
      </div>
    </section>
    <About />
    <Experience />
    <Contact />
    </>
  );
}
