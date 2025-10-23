"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import {
  Music,
  BookOpen,
  Baby,
  HeartHandshake,
  Users,
  HelpingHand,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Сучасне прославлення",
    desc: "Жива музика, сповнена радості та поклоніння Богові.",
  },
  {
    icon: BookOpen,
    title: "Проповідь на основі Біблії",
    desc: "Слово Боже, яке торкається серця та змінює життя.",
  },
  {
    icon: Baby,
    title: "Програма для дітей",
    desc: "Цікаві біблійні історії, ігри та творчість для малюків.",
  },
  {
    icon: HeartHandshake,
    title: "Спільна молитва",
    desc: "Разом дякуємо, просимо і підтримуємо один одного.",
  },
  {
    icon: Users,
    title: "Дружнє спілкування",
    desc: "Тут тебе зустрінуть із теплом, усмішкою та щирістю.",
  },
  {
    icon: HelpingHand,
    title: "Допомога та підтримка",
    desc: "Церква, яка піклується про духовні й життєві потреби людей.",
  },
];

export default function FirstTimeSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="container mx-auto px-4 py-16 lg:py-24">
          {/* ===== Верхня частина ===== */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h6 className="text-accent italic mb-2">Ви вперше з нами?</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ми хочемо, щоб ти почувався як удома
            </h2>
            <p className="text-gray-600">
              Наша церква — це місце, де кожен може знайти віру, підтримку та
              справжніх друзів. Ось що ти можеш очікувати, коли завітаєш уперше:
            </p>
          </div>

          {/* ===== Іконки ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent text-white mb-4">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ===== Нижня частина ===== */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <Image
                src="/images/community-photo.jpg"
                alt="Церква"
                width={700}
                height={500}
                className="rounded-xl shadow-md object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ти бажаний гість у нашій спільноті
              </h2>
              <p className="text-gray-600 mb-6">
                Ми будемо раді бачити тебе на недільному богослужінні! Ти зможеш
                познайомитися з пастором, командою служителів і людьми, які
                живуть вірою.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Щире вітання при вході",
                  "Коротка орієнтація для нових гостей",
                  "Молитва за тебе, якщо захочеш",
                  "Можливість знайти свою спільноту",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-[2px]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/first-time"
                className="inline-block rounded-md bg-primary-gradient text-white px-6 py-3 font-medium shadow hover:shadow-lg transition"
              >
                Я тут вперше
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
