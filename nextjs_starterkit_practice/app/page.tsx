import { Zap, Palette, Code, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/layout/container";

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Lightning Fast",
    description: "Built on Next.js with optimized performance and instant page loads.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Beautiful UI",
    description: "Pre-configured with shadcn/ui components and Tailwind CSS for stunning designs.",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Type Safe",
    description: "Full TypeScript support with strict type checking for better code quality.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Production Ready",
    description: "Best practices baked in with dark mode, responsive design, and accessibility.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build Modern Web Apps{" "}
              <span className="text-primary">Faster</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              A modern starter kit with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
              Everything you need to build beautiful, responsive web applications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start building with a solid foundation of modern technologies and best practices.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
