import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import { SkeletonDemo } from "./components/skeleton/SkeletonDemo";
import { Spinner } from "@/components/ui/spinner";
import { Calendar01 } from "./components/calender/calendar-01";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkeletonDemo />
      <Calendar01 />
      <div className="py-8">
        <Spinner className="size-6 text-zinc-500" />
      </div>
    </main>
  );
}
