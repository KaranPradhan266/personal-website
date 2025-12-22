import { Heading1 } from "lucide-react";
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
      <h1>hello world</h1>
    </section>
  );
}
