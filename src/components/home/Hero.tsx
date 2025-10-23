"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

// Імпорт зображень (замість твоїх)
// import banner5 from '@/assets/images/banner/05.jpg'
// import banner2 from '@/assets/images/banner/02.jpg'

// Типи для слайдів
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  alignment: "left" | "center";
  buttons: Array<{
    text: string;
    variant: "default" | "ghost";
    link: string;
  }>;
}

const Hero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Дані слайдів (адаптуй під свої потреби)
  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/community-photo.jpg", // Замість banner5.src
      title: "Церква, де кожен знайде свій дім",
      subtitle: "Приєднуйтесь до нас кожної неділі о 10:00 та 17:00",
      alignment: "left",
      buttons: [
        { text: "Я хочу прийти", variant: "default", link: "/first-time" },
        { text: "Дізнатись більше", variant: "ghost", link: "/about" },
      ],
    },
    {
      id: 2,
      image: "/images/community-photo.jpg", // Замість banner2.src
      title: "Спільнота, що змінює життя",
      subtitle: "Відкрийте для себе силу віри та єдності",
      alignment: "center",
      buttons: [
        { text: "Зв'язатись з нами", variant: "default", link: "/contact" },
      ],
    },
  ];

  // Відстеження поточного слайду
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Власний autoplay
  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[400px] lg:h-[700px]">
                {/* Фонове зображення */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />

                {/* Контент */}
                <div className="relative z-20 container mx-auto h-full px-4 sm:px-6 lg:px-8">
                  <div className="flex h-full items-center">
                    <div
                      className={`w-full ${
                        slide.alignment === "left"
                          ? "max-w-full lg:max-w-[66.666%] xl:max-w-[50%] lg:ml-8 xl:ml-12"
                          : "max-w-full md:max-w-[66.666%] mx-auto"
                      } ${
                        slide.alignment === "center"
                          ? "text-center"
                          : "text-left"
                      }`}
                    >
                      {/* Заголовок з анімацією */}
                      <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight"
                      >
                        {slide.title}
                      </motion.h2>

                      {/* Підзаголовок з анімацією */}
                      <motion.h3
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic mb-4 md:mb-6 lg:mb-8 leading-relaxed"
                      >
                        {slide.subtitle}
                      </motion.h3>

                      {/* Кнопки з анімацією */}
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className={`flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 ${
                          slide.alignment === "center" ? "justify-center" : ""
                        }`}
                      >
                        {slide.buttons.map((button, btnIndex) => (
                          <Button
                            key={btnIndex}
                            variant={button.variant}
                            size="lg"
                            className={
                              button.variant === "default"
                                ? "bg-primary-gradient hover:opacity-90 text-white shadow-primary px-6 sm:px-8 w-full sm:w-auto"
                                : "text-white border-white/30 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
                            }
                            asChild
                          >
                            <a href={button.link}>{button.text}</a>
                          </Button>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Стрілки навігації - ховаються на мобільних */}
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110" />
        </div>

        {/* Індикатори слайдів */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60 w-2"
              }`}
              aria-label={`Перейти до слайду ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
