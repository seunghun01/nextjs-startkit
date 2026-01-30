import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#docs", label: "Documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#blog", label: "Blog" },
      { href: "#careers", label: "Careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              StarterKit
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Build beautiful web applications faster with our modern starter kit.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StarterKit. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
