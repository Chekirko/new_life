import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsSlider } from "@/components/home/NewsSlider";
import Image from "next/image";

import { Monitor, Code, Palette } from "lucide-react";
import Hero from "@/components/home/Hero";

const services = [
  {
    title: "Web Design",
    desc: "Elegant and responsive UI/UX tailored to your brand.",
    icon: <Palette size={40} />,
    imgSrc: "/images/service-design.jpg",
  },
  {
    title: "Development",
    desc: "High-performance frontend & backend development.",
    icon: <Code size={40} />,
    imgSrc: "/images/service-development.jpg",
  },
  {
    title: "Consulting",
    desc: "Expert advice to help you scale and optimize.",
    icon: <Monitor size={40} />,
    imgSrc: "/images/service-consulting.jpg",
  },
];

const projects = [
  { title: "Project One", img: "/images/placeholder1.jpg" },
  { title: "Project Two", img: "/images/placeholder2.jpg" },
  { title: "Project Three", img: "/images/placeholder3.jpg" },
  { title: "Project Four", img: "/images/placeholder4.jpg" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Hero />
        <NewsSlider />
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Build your digital presence with Larexa
              </h1>
              <p className="mt-4 text-lg max-w-lg">
                A modern, creative landing page built for agencies, startups,
                and creative teams.
              </p>
              <div className="mt-8 flex space-x-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white text-primary rounded-md font-semibold shadow"
                >
                  Contact Us
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-primary transition"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div>
              {/* зображення-заглушка */}
              <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">Image Mockup</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="services" className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-card rounded-lg border border-border text-center"
              >
                <div className="mb-4 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Our Services</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col items-center bg-card border border-border rounded-lg overflow-hidden shadow-sm"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={s.imgSrc}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Our Portfolio</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
