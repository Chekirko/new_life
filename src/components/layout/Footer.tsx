import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Про церкву */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Наша Церква</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Українська П&apos;ятидесятницька Церква - місце, де Бог
              зустрічається з людьми, де серця відкриваються для Його любові та
              благодаті.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Швидкі посилання */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">
              Швидкі посилання
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Служіння
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Події
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Проповіді
                </Link>
              </li>
            </ul>
          </div>

          {/* Служіння */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Служіння</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ministries/worship"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Богослужіння
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries/youth"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Молодіжне служіння
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries/children"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Дитяче служіння
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries/prayer-groups"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  Молитовні групи
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Контакти</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  вул. Прикладна 1, Львів, 79000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+380671234567"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  +380 67 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@church.ua"
                  className="text-muted-foreground hover:text-church-primary transition-colors"
                >
                  info@church.ua
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Українська П&apos;ятидесятницька Церква. Всі права
            захищено.
          </p>
        </div>
      </div>
    </footer>
  );
}
