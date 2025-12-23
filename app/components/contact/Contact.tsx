import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
 
export function Contact() {
  return (
    <section aria-label="Contact" className="space-y-6 text-left">
      <div className="divide-y divide-border/60">
        <a
          href="mailto:hi@jacobvos.com"
          className="flex items-center justify-between gap-4 py-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <div className="flex items-center gap-3">
            <Mail className="size-5" aria-hidden="true" />
            <span className="text-base font-medium">Email</span>
          </div>
          <div className="flex items-center gap-2">
            <span>karanpradhan266@gmail.com</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </div>
        </a>
        {/* <a
          href="https://x.com/jacob"
          className="flex items-center justify-between gap-4 py-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <div className="flex items-center gap-3">
            <X className="size-5" aria-hidden="true" />
            <span className="text-base font-medium">X.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>@jacob</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </div>
        </a> */}
        <div
          className="flex items-center justify-between gap-4 py-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <div className="flex items-center gap-3">
            <Github className="size-5" aria-hidden="true" />
            <span className="text-base font-medium">GitHub</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkPreview
                url="https://github.com/karanpradhan266"
                className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground">
            <span>@karanpradhan266</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
            </LinkPreview>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Linkedin className="size-5" aria-hidden="true" />
            <span className="text-base font-medium">LinkedIn</span>
          </div>
          <LinkPreview
            url="https://www.linkedin.com/in/karanpradhan266/"
            className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>/in/karanpradhan266</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </LinkPreview>
        </div>
      </div>
    </section>
  );
}
