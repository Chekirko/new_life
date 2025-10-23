"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
// import { UserProfile } from "@/components/auth/UserProfile";

const navigationItems = [
  { name: "Головна", href: "/" },
  { name: "Про нас", href: "/about" },
  {
    name: "Служіння",
    href: "/ministries",
    children: [
      { name: "Богослужіння", href: "/ministries/worship" },
      { name: "Молодіжне служіння", href: "/ministries/youth" },
      { name: "Дитяче служіння", href: "/ministries/children" },
      { name: "Молитовні групи", href: "/ministries/prayer-groups" },
    ],
  },
  { name: "Події", href: "/events" },
  { name: "Проповіді", href: "/sermons" },
  { name: "Новини", href: "/news" },
  { name: "Контакти", href: "/contact" },
];

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-church-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">УПЦ</span>
          </div>
          <span className="font-heading font-bold text-xl hidden sm:inline">
            Українська П&apos;ятидесятницька Церква
          </span>
          <span className="font-heading font-bold text-xl sm:hidden">УПЦ</span>
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium transition-colors hover:text-church-primary"
              >
                {item.name}
                {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>

              {item.children && (
                <div className="absolute top-full left-0 mt-1 w-48 rounded-md border bg-popover p-1 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-3 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Права сторона: Користувач + кнопка пожертв */}
        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-church-accent hover:bg-church-accent/90"
          >
            <Link href="/donate">Підтримати</Link>
          </Button>

          {/* Компонент профілю користувача */}
          {/* <UserProfile /> */}

          {/* Мобільне меню */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button
                  asChild
                  className="bg-church-accent hover:bg-church-accent/90 mt-4"
                >
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    Підтримати церкву
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
