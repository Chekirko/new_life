// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Calendar, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// // Тип для новини
// interface NewsItem {
//   id: number;
//   title: string;
//   excerpt: string;
//   category: string;
//   author: string;
//   date: string;
//   image: string;
//   slug: string;
// }

// const NewsSection = () => {
//   // Тестові дані (надалі замінити на імпорт з Sanity)
//   const newsItems: NewsItem[] = [
//     {
//       id: 1,
//       title: "Історії свідчень членів нашої церкви",
//       excerpt:
//         "Дізнайтеся, як Бог змінює життя людей у нашій спільноті. Свідчення про віру, надію та любов.",
//       category: "Свідчення",
//       author: "Іван Петренко",
//       date: "2 години тому",
//       image: "/images/news/01.jpg",
//       slug: "stories-testimonies",
//     },
//     {
//       id: 2,
//       title: "Молодіжне служіння: нові горизонти",
//       excerpt:
//         "Молодь нашої церкви активно розвивається та служить Богу. Дізнайтеся про наші плани на майбутнє.",
//       category: "Молодь",
//       author: "Марія Коваль",
//       date: "19 годин тому",
//       image: "/images/news/02.jpg",
//       slug: "youth-ministry-horizons",
//     },
//     {
//       id: 3,
//       title: "Місіонерська поїздка до східних регіонів",
//       excerpt:
//         "Команда нашої церкви відвідала східні регіони України з місією підтримки та євангелізації.",
//       category: "Місія",
//       author: "Степан Сидоренко",
//       date: "1 день тому",
//       image: "/images/news/03.jpg",
//       slug: "mission-trip-east",
//     },
//     {
//       id: 4,
//       title: "Дитяче служіння: нові програми",
//       excerpt:
//         "Запускаємо нові програми для дітей різного віку. Біблійні історії, ігри та творчість для найменших.",
//       category: "Діти",
//       author: "Олена Шевченко",
//       date: "2 дні тому",
//       image: "/images/news/04.jpg",
//       slug: "children-ministry-programs",
//     },
//     {
//       id: 5,
//       title: "Конференція про сімейні цінності",
//       excerpt:
//         "Запрошуємо на конференцію, присвячену зміцненню сімейних відносин на біблійних принципах.",
//       category: "Сім'я",
//       author: "Андрій Бондаренко",
//       date: "3 дні тому",
//       image: "/images/news/05.jpg",
//       slug: "family-values-conference",
//     },
//     {
//       id: 6,
//       title: "Літній табір для підлітків 2025",
//       excerpt:
//         "Реєстрація на літній християнський табір вже відкрита. Незабутні враження, нові друзі та зустріч з Богом.",
//       category: "Події",
//       author: "Тетяна Мельник",
//       date: "4 дні тому",
//       image: "/images/news/06.jpg",
//       slug: "summer-camp-2025",
//     },
//     {
//       id: 7,
//       title: "Служіння хвали та поклоніння",
//       excerpt:
//         "Дізнайтеся більше про наше служіння хвали. Як приєднатися до команди та служити Богу через музику.",
//       category: "Музика",
//       author: "Василь Кравченко",
//       date: "5 днів тому",
//       image: "/images/news/07.jpg",
//       slug: "worship-ministry",
//     },
//     {
//       id: 8,
//       title: "Благодійна акція допомоги нужденним",
//       excerpt:
//         "Церква організовує збір гуманітарної допомоги для потребуючих родин. Долучайтеся до доброчинності.",
//       category: "Благодійність",
//       author: "Наталія Ткаченко",
//       date: "1 тиждень тому",
//       image: "/images/news/08.jpg",
//       slug: "charity-campaign",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Заголовок секції */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Новини та події
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Слідкуйте за життям нашої церкви, подіями та свідченнями віри
//           </p>
//         </motion.div>

//         {/* Карусель новин */}
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-4">
//             {newsItems.map((item, index) => (
//               <CarouselItem
//                 key={item.id}
//                 className="pl-4 md:basis-1/2 lg:basis-1/3"
//               >
//                 <motion.div
//                   initial={{ y: 30, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Card className="overflow-hidden h-full flex flex-col group hover:shadow-primary transition-all duration-300">
//                     {/* Зображення з категорією */}
//                     <div className="relative aspect-[4/3] overflow-hidden">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                       {/* Бейдж категорії */}
//                       <Badge className="absolute top-3 right-3 bg-primary-gradient text-white border-0 shadow-lg">
//                         {item.category}
//                       </Badge>
//                     </div>

//                     <CardContent className="flex-grow p-5">
//                       {/* Дата */}
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
//                         <Calendar className="w-4 h-4" />
//                         <span>{item.date}</span>
//                       </div>

//                       {/* Заголовок (2 рядки max) */}
//                       <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
//                         {item.title}
//                       </h3>

//                       {/* Excerpt (4 рядки max) */}
//                       <p className="text-muted-foreground line-clamp-4 leading-relaxed">
//                         {item.excerpt}
//                       </p>
//                     </CardContent>

//                     <CardFooter className="p-5 pt-0">
//                       <Button
//                         variant="ghost"
//                         className="w-full group/btn hover:bg-primary/10 hover:text-primary"
//                         asChild
//                       >
//                         <a
//                           href={`/news/${item.slug}`}
//                           className="flex items-center justify-center gap-2"
//                         >
//                           Читати далі
//                           <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
//                         </a>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Стрілки навігації */}
//           <div className="hidden md:block">
//             <CarouselPrevious className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2" />
//             <CarouselNext className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2" />
//           </div>
//         </Carousel>

//         {/* Кнопка "Всі новини" */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-10"
//         >
//           <Button
//             size="lg"
//             className="bg-primary-gradient hover:opacity-90 text-white shadow-primary"
//             asChild
//           >
//             <a href="/news">Переглянути всі новини</a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Тип для новини
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const NewsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Тестові дані (надалі замінити на імпорт з Sanity)
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Історії свідчень членів нашої церкви",
      excerpt:
        "Дізнайтеся, як Бог змінює життя людей у нашій спільноті. Свідчення про віру, надію та любов.",
      category: "Свідчення",
      author: "Іван Петренко",
      date: "2 години тому",
      image: "/images/news/01.jpg",
      slug: "stories-testimonies",
    },
    {
      id: 2,
      title: "Молодіжне служіння: нові горизонти",
      excerpt:
        "Молодь нашої церкви активно розвивається та служить Богу. Дізнайтеся про наші плани на майбутнє.",
      category: "Молодь",
      author: "Марія Коваль",
      date: "19 годин тому",
      image: "/images/news/02.jpg",
      slug: "youth-ministry-horizons",
    },
    {
      id: 3,
      title: "Місіонерська поїздка до східних регіонів",
      excerpt:
        "Команда нашої церкви відвідала східні регіони України з місією підтримки та євангелізації.",
      category: "Місія",
      author: "Степан Сидоренко",
      date: "1 день тому",
      image: "/images/news/03.jpg",
      slug: "mission-trip-east",
    },
    {
      id: 4,
      title: "Дитяче служіння: нові програми",
      excerpt:
        "Запускаємо нові програми для дітей різного віку. Біблійні історії, ігри та творчість для найменших.",
      category: "Діти",
      author: "Олена Шевченко",
      date: "2 дні тому",
      image: "/images/news/04.jpg",
      slug: "children-ministry-programs",
    },
    {
      id: 5,
      title: "Конференція про сімейні цінності",
      excerpt:
        "Запрошуємо на конференцію, присвячену зміцненню сімейних відносин на біблійних принципах.",
      category: "Сім'я",
      author: "Андрій Бондаренко",
      date: "3 дні тому",
      image: "/images/news/05.jpg",
      slug: "family-values-conference",
    },
    {
      id: 6,
      title: "Літній табір для підлітків 2025",
      excerpt:
        "Реєстрація на літній християнський табір вже відкрита. Незабутні враження, нові друзі та зустріч з Богом.",
      category: "Події",
      author: "Тетяна Мельник",
      date: "4 дні тому",
      image: "/images/news/06.jpg",
      slug: "summer-camp-2025",
    },
    {
      id: 7,
      title: "Служіння хвали та поклоніння",
      excerpt:
        "Дізнайтеся більше про наше служіння хвали. Як приєднатися до команди та служити Богу через музику.",
      category: "Музика",
      author: "Василь Кравченко",
      date: "5 днів тому",
      image: "/images/news/07.jpg",
      slug: "worship-ministry",
    },
    {
      id: 8,
      title: "Благодійна акція допомоги нужденним",
      excerpt:
        "Церква організовує збір гуманітарної допомоги для потребуючих родин. Долучайтеся до доброчинності.",
      category: "Благодійність",
      author: "Наталія Ткаченко",
      date: "1 тиждень тому",
      image: "/images/news/08.jpg",
      slug: "charity-campaign",
    },
  ];

  return (
    <section className="px-12 py-16 md:py-20 lg:py-24 bg-muted/30">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок секції */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Новини та події
            </h2>
            <p className="text-muted-foreground text-lg">
              Слідкуйте за життям нашої церкви, подіями та свідченнями віри
            </p>
          </motion.div>

          {/* Карусель новин */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {newsItems.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-primary transition-all duration-300">
                      {/* Зображення з категорією */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Бейдж категорії */}
                        <Badge className="absolute top-3 right-3 bg-primary-gradient font-medium text-white border-0 shadow-lg px-3">
                          {item.category}
                        </Badge>
                      </div>

                      <CardContent className="flex-grow p-4">
                        {/* Дата */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>

                        {/* Заголовок (2 рядки max) */}
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        {/* Excerpt (4 рядки max) */}
                        <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                      </CardContent>

                      <CardFooter className="p-4 pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                          asChild
                        >
                          <Link
                            href={`/news/${item.slug}`}
                            className="flex items-center justify-center gap-2"
                          >
                            Читати далі
                            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Стрілки навігації */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>

          {/* Кнопка "Всі новини" */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Button
              size="lg"
              className="bg-primary-gradient hover:opacity-90 text-white shadow-primary"
              asChild
            >
              <a href="/news">Переглянути всі новини</a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
