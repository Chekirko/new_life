// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// import { Container } from "@/components/ui/Container";
// import { Logo } from "@/components/layout/Logo";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Menu } from "lucide-react";

// // Єдине джерело правди для навігації
// const navigationItems = [
//   { href: "/im-new-here", label: "Я тут вперше" },
//   {
//     label: "Про нас",
//     basePath: "/about",
//     children: [
//       {
//         title: "Наша історія та віра",
//         href: "/about/story-and-faith",
//         description: "Дізнайтесь про наші корені, цінності та у що ми віримо.",
//       },
//       {
//         title: "Команда",
//         href: "/about/team",
//         description: "Познайомтесь з пасторами та лідерами нашої церкви.",
//       },
//     ],
//   },
//   { href: "/ministries", label: "Служіння" },
//   { href: "/media", label: "Медіа" },
//   { href: "/events", label: "Події" },
//   { href: "/contact", label: "Контакти" },
// ];

// export const Header = () => {
//   const pathname = usePathname();

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm"
//     >
//       <Container className="flex items-center justify-between h-20">
//         <Logo />

//         {/* --- ДЕСКТОПНА НАВІГАЦІЯ --- */}
//         <div className="hidden md:flex items-center gap-x-2">
//           <NavigationMenu>
//             <NavigationMenuList>
//               {navigationItems.map((item) => (
//                 <NavigationMenuItem key={item.label}>
//                   {item.children ? (
//                     <>
//                       <NavigationMenuTrigger
//                         className={cn(
//                           pathname.startsWith(item.basePath!)
//                             ? "text-primary"
//                             : ""
//                         )}
//                       >
//                         {item.label}
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent>
//                         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                           {item.children.map((child) => (
//                             <ListItem
//                               key={child.title}
//                               href={child.href}
//                               title={child.title}
//                             >
//                               {child.description}
//                             </ListItem>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     </>
//                   ) : (
//                     <Link href={item.href!} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={cn(
//                           navigationMenuTriggerStyle(),
//                           pathname === item.href ? "text-primary" : ""
//                         )}
//                       >
//                         {item.label}
//                       </NavigationMenuLink>
//                     </Link>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>

//           <div className="pl-4">
//             <Button asChild>
//               <Link href="/donate">Пожертвувати</Link>
//             </Button>
//           </div>
//         </div>

//         {/* --- МОБІЛЬНЕ МЕНЮ --- */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="w-6 h-6" />
//                 <span className="sr-only">Відкрити меню</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] p-4">
//               <div className="mb-8">
//                 <Logo />
//               </div>
//               <nav className="flex flex-col space-y-4">
//                 {navigationItems.flatMap((item) =>
//                   item.children ? (
//                     [
//                       <h4
//                         key={item.label}
//                         className="font-semibold pt-2 text-muted-foreground"
//                       >
//                         {item.label}
//                       </h4>,
//                       ...item.children.map((child) => (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className="pl-2 text-lg font-medium transition-colors hover:text-primary"
//                         >
//                           {child.title}
//                         </Link>
//                       )),
//                     ]
//                   ) : (
//                     <Link
//                       key={item.href}
//                       href={item.href!}
//                       className="text-lg font-medium transition-colors hover:text-primary"
//                     >
//                       {item.label}
//                     </Link>
//                   )
//                 )}
//                 <Button asChild className="mt-6">
//                   <Link href="/donate">Пожертвувати</Link>
//                 </Button>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </Container>
//     </motion.header>
//   );
// };

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// import { Container } from "@/components/ui/Container";
// import { Logo } from "@/components/layout/Logo";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Menu } from "lucide-react";

// const navigationItems = [
//   { href: "/im-new-here", label: "Я тут вперше" },
//   {
//     label: "Про нас",
//     basePath: "/about",
//     children: [
//       { title: "Наша історія та віра", href: "/about/story-and-faith" },
//       { title: "Команда", href: "/about/team" },
//     ],
//   },
//   { href: "/ministries", label: "Служіння" },
//   { href: "/media", label: "Медіа" },
//   { href: "/events", label: "Події" },
//   { href: "/contact", label: "Контакти" },
// ];

// export const Header = () => {
//   const pathname = usePathname();

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="sticky top-0 z-50 w-full border-b bg-background"
//     >
//       <Container className="flex items-center justify-between h-24">
//         {/* --- ЛОГОТИП --- */}
//         <div className="flex-shrink-0">
//           <Logo />
//         </div>

//         {/* --- ДЕСКТОПНА НАВІГАЦІЯ --- */}
//         <div className="hidden md:flex justify-center flex-grow">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-x-2">
//               {navigationItems.map((item) => (
//                 <NavigationMenuItem key={item.label}>
//                   {item.children ? (
//                     <>
//                       <NavigationMenuTrigger
//                         className={cn(
//                           "text-base font-medium",
//                           pathname.startsWith(item.basePath!)
//                             ? "text-primary"
//                             : "text-foreground/80"
//                         )}
//                       >
//                         {item.label}
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent>
//                         <ul className="grid w-56 p-2">
//                           {item.children.map((child) => (
//                             <ListItem
//                               key={child.title}
//                               href={child.href}
//                               title={child.title}
//                             />
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     </>
//                   ) : (
//                     <NavigationMenuLink asChild>
//                       <Link
//                         href={item.href!}
//                         className={cn(
//                           "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
//                           pathname === item.href
//                             ? "text-primary"
//                             : "text-foreground/80"
//                         )}
//                       >
//                         {item.label}
//                       </Link>
//                     </NavigationMenuLink>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* --- КНОПКА CTA (Call To Action) --- */}
//         <div className="hidden md:flex flex-shrink-0">
//           <Button
//             asChild
//             className="bg-primary-gradient text-primary-foreground font-semibold transition-transform hover:scale-105"
//           >
//             <Link href="/donate">Пожертвувати</Link>
//           </Button>
//         </div>

//         {/* --- МОБІЛЬНЕ МЕНЮ --- */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="w-7 h-7" />
//                 <span className="sr-only">Відкрити меню</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] p-6">
//               <div className="mb-8">
//                 <Logo />
//               </div>
//               <nav className="flex flex-col space-y-5">
//                 {navigationItems.map((item) => (
//                   <React.Fragment key={item.label}>
//                     {item.children ? (
//                       <div className="flex flex-col space-y-3 pt-2">
//                         <h4 className="text-base font-semibold text-foreground">
//                           {item.label}
//                         </h4>
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             className="pl-3 text-lg text-foreground/70 transition-colors hover:text-primary"
//                           >
//                             {child.title}
//                           </Link>
//                         ))}
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href!}
//                         className="text-lg text-foreground transition-colors hover:text-primary"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </React.Fragment>
//                 ))}
//                 <Button
//                   asChild
//                   className="mt-6 bg-primary-gradient text-primary-foreground font-semibold"
//                 >
//                   <Link href="/donate">Пожертвувати</Link>
//                 </Button>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </Container>
//     </motion.header>
//   );
// };

// // Спрощений ListItem для простого випадаючого списку
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   { href: string; title: string; className?: string }
// >(({ className, title, href }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           ref={ref}
//           href={href}
//           className={cn(
//             "block select-none rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted",
//             className
//           )}
//         >
//           {title}
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
// Мобільне меню поки що не додаємо, щоб сфокусуватись на ідеальному десктоп-варіанті

const navigationItems = [
  { href: "/", label: "Головна" },
  {
    label: "Про нас",
    basePath: "/about",
    children: [
      { title: "Наша історія та віра", href: "/about/story-and-faith" },
      { title: "Команда", href: "/about/team" },
    ],
  },
  { href: "/ministries", label: "Служіння" },
  { href: "/media", label: "Медіа" },
  { href: "/events", label: "Події" },
  { href: "/contact", label: "Контакти" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    // Статичний "липкий" хедер, як на зображенні
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <Container className="flex items-center justify-between h-24">
        {/* Логотип (ліва частина) */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Навігація (центральна частина) */}
        <div className="hidden md:flex justify-center flex-grow">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <NavigationMenuTrigger
                      className={cn(
                        "text-base font-medium",
                        pathname.startsWith(item.basePath!)
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href!}
                        className={cn(
                          "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                          pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Іконка пошуку та кнопка (права частина) */}
        <div className="hidden md:flex items-center gap-x-4">
          <Search className="w-5 h-5 text-muted-foreground transition-colors hover:text-primary cursor-pointer" />
          <Button
            asChild
            className="bg-primary-gradient text-primary-foreground font-semibold transition-transform hover:scale-105"
          >
            <Link href="/donate">Пожертвувати</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};
