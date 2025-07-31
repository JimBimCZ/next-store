import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight  sm:text-6xl">
          Game changer in shopping
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Actually just a Next.js app
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
