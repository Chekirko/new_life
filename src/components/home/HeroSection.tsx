// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Container } from "@/components/ui/Container";
// import { Button } from "@/components/ui/button";
// import { PlayCircle } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center">
//       {/* Фонове зображення */}
//       <div className="absolute inset-0 z-[-1]">
//         <Image
//           src="/images/community-photo.jpg" // Тимчасове фото. Замініть на своє.
//           alt="Церковна спільнота"
//           fill
//           className="object-cover"
//           priority // Для LCP (Largest Contentful Paint)
//         />
//         {/* Затемнення для кращого контрасту тексту */}
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-3xl text-white"
//         >
//           <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl pl-2 backdrop-blur-md">
//             Церква, де кожен знайде свій дім.
//           </h1>
//           <p className="mt-6 text-lg text-white/80 md:text-xl backdrop-blur-md">
//             Приєднуйтесь до нас цієї неділі о 10:00 за адресою: вул. Хрещатик,
//             21
//           </p>
//           <div className="mt-8 flex flex-wrap gap-4">
//             <Button size="lg" asChild>
//               <Link href="/im-new-here">Я тут вперше</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="bg-transparent text-white border-primary hover:bg-primary/10 hover:text-white"
//             >
//               <PlayCircle className="w-5 h-5 mr-2" />
//               Дивитись онлайн
//             </Button>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

// Налаштування для анімації "виринання"
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    <section className="w-full py-20 bg-muted">
      <Container className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        {/* --- ЛІВА КОЛОНКА (ТЕКСТ) --- */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-x-2 rounded-full bg-primary-gradient px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Users className="w-5 h-5" />
            <span>Церква для всієї родини</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight md:text-6xl"
          >
            Місце, де тебе люблять і чекають
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Ми віримо, що церква — це не просто будівля, а велика сім&apos;я,
            об&apos;єднана вірою в Ісуса Христа, де кожен може знайти своє
            покликання.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary-gradient text-primary-foreground font-semibold transition-transform hover:scale-105"
            >
              <Link href="/ministries">Наші служіння</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/contact">Зв&apos;язатись з нами</Link>
            </Button>
          </motion.div>
        </div>

        {/* --- ПРАВА КОЛОНКА (ЗОБРАЖЕННЯ) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/community-photo.jpg"
            alt="Спільнота церкви"
            width={600}
            height={600}
            className="object-contain rounded-lg"
            priority
          />
        </motion.div>
      </Container>
    </section>
  );
};
