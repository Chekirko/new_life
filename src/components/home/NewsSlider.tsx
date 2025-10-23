"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Тимчасові дані. Пізніше ми будемо отримувати їх з Sanity.
const newsItems = [
  {
    id: 1,
    imageSrc: "/images/news-1.jpg",
    title: "Великоднє служіння: як це було",
    excerpt:
      "Фотозвіт та ключові думки з святкової проповіді про перемогу життя над смертю.",
    href: "/news/easter-service-report",
  },
  {
    id: 2,
    imageSrc: "/images/news-2.jpg",
    title: 'Молодіжний табір "На висоті"',
    excerpt:
      "Незабутні враження, нові друзі та глибокі духовні відкриття чекали на нашу молодь цього літа.",
    href: "/news/youth-camp-2025",
  },
  {
    id: 3,
    imageSrc: "/images/news-3.jpg",
    title: "Допомога переселенцям: звіт",
    excerpt:
      "Завдяки вашим пожертвам ми змогли допомогти десяткам сімей знайти прихисток та надію.",
    href: "/news/refugee-aid-report",
  },
  {
    id: 4,
    imageSrc: "/images/news-4.jpg",
    title: "Новий сезон домашніх груп!",
    excerpt:
      "Знаходьте свою групу, щоб разом зростати у вірі, молитися та підтримувати один одного.",
    href: "/news/home-groups-new-season",
  },
];

export const NewsSlider = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
            Останні новини та статті
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-muted-foreground">
            Будьте в курсі подій нашого церковного життя
          </p>
        </motion.div>

        {/* Карусель */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {newsItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="p-0">
                        <Link href={item.href}>
                          <div className="relative w-full h-56">
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold leading-snug">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                              {item.excerpt}
                            </p>
                            <div className="mt-4 text-sm font-semibold text-primary transition-all group-hover:underline group-hover:translate-x-1">
                              Читати далі →
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden ml-12 sm:flex" />
            <CarouselNext className="hidden mr-12 sm:flex" />
          </Carousel>
        </motion.div>
      </Container>
    </section>
  );
};
