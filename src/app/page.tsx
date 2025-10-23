import { Header } from "@/components/layout/Header";
// import { HeroSection } from "@/components/home/HeroSection";
import { NewsSlider } from "@/components/home/NewsSlider";

import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/News";
import PastorGreetings from "@/components/home/PastorGreetings";

// const services = [
//   {
//     title: "Web Design",
//     desc: "Elegant and responsive UI/UX tailored to your brand.",
//     icon: <Palette size={40} />,
//     imgSrc: "/images/service-design.jpg",
//   },
//   {
//     title: "Development",
//     desc: "High-performance frontend & backend development.",
//     icon: <Code size={40} />,
//     imgSrc: "/images/service-development.jpg",
//   },
//   {
//     title: "Consulting",
//     desc: "Expert advice to help you scale and optimize.",
//     icon: <Monitor size={40} />,
//     imgSrc: "/images/service-consulting.jpg",
//   },
// ];

// const projects = [
//   { title: "Project One", img: "/images/placeholder1.jpg" },
//   { title: "Project Two", img: "/images/placeholder2.jpg" },
//   { title: "Project Three", img: "/images/placeholder3.jpg" },
//   { title: "Project Four", img: "/images/placeholder4.jpg" },
// ];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* <HeroSection /> */}
        <Hero />
        <NewsSection />
        <PastorGreetings />
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
    </>
  );
}
