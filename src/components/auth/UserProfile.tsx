// "use client";

// import { useState } from "react";
// import { signOut } from "next-auth/react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { useAuth } from "@/hooks/useAuth";
// import {
//   User,
//   Settings,
//   LogOut,
//   Crown,
//   Shield,
//   Heart,
//   UserCheck,
// } from "lucide-react";

// // Функція для отримання іконки ролі
// const getRoleIcon = (role: string) => {
//   switch (role) {
//     case "admin":
//       return <Crown className="w-3 h-3" />;
//     case "pastor":
//       return <Shield className="w-3 h-3" />;
//     case "minister":
//       return <Heart className="w-3 h-3" />;
//     case "member":
//       return <UserCheck className="w-3 h-3" />;
//     default:
//       return <User className="w-3 h-3" />;
//   }
// };

// // Функція для отримання кольору ролі
// const getRoleColor = (role: string) => {
//   switch (role) {
//     case "admin":
//       return "bg-red-100 text-red-800 border-red-200";
//     case "pastor":
//       return "bg-purple-100 text-purple-800 border-purple-200";
//     case "minister":
//       return "bg-blue-100 text-blue-800 border-blue-200";
//     case "member":
//       return "bg-green-100 text-green-800 border-green-200";
//     default:
//       return "bg-gray-100 text-gray-800 border-gray-200";
//   }
// };

// // Функція для отримання назви ролі українською
// const getRoleName = (role: string) => {
//   const roleNames = {
//     admin: "Адміністратор",
//     pastor: "Пастор",
//     minister: "Служитель",
//     member: "Учасник",
//     visitor: "Відвідувач",
//   };
//   return roleNames[role as keyof typeof roleNames] || "Користувач";
// };

// interface UserProfileProps {
//   showFullProfile?: boolean;
// }

// export function UserProfile({ showFullProfile = false }: UserProfileProps) {
//   const { user, isAuthenticated, isLoading, userRole } = useAuth();
//   const [isSigningOut, setIsSigningOut] = useState(false);

//   // Обробник виходу з системи
//   const handleSignOut = async () => {
//     setIsSigningOut(true);
//     try {
//       await signOut({ callbackUrl: "/" });
//     } catch (error) {
//       console.error("Sign out error:", error);
//       setIsSigningOut(false);
//     }
//   };

//   // Показуємо завантаження
//   if (isLoading) {
//     return (
//       <div className="flex items-center space-x-2">
//         <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
//         <div className="w-20 h-4 bg-gray-200 rounded animate-pulse hidden md:block"></div>
//       </div>
//     );
//   }

//   // Якщо користувач не авторизований, показуємо кнопки входу
//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="sm" asChild>
//           <a href="/auth/signin">Вхід</a>
//         </Button>
//         <Button
//           size="sm"
//           asChild
//           className="bg-church-primary hover:bg-church-primary/90"
//         >
//           <a href="/auth/signup">Реєстрація</a>
//         </Button>
//       </div>
//     );
//   }

//   // Повна версія профілю (для сторінки профілю)
//   if (showFullProfile) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
//         <div className="flex items-center space-x-4">
//           <Avatar className="w-16 h-16">
//             <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
//             <AvatarFallback className="text-lg font-semibold bg-church-primary text-white">
//               {user?.name?.charAt(0)?.toUpperCase() || "U"}
//             </AvatarFallback>
//           </Avatar>

//           <div className="flex-1 space-y-2">
//             <h2 className="text-xl font-semibold text-gray-900">
//               {user?.name}
//             </h2>
//             <p className="text-gray-600">{user?.email}</p>
//             <Badge
//               variant="outline"
//               className={`${getRoleColor(userRole)} font-medium`}
//             >
//               <span className="mr-1">{getRoleIcon(userRole)}</span>
//               {getRoleName(userRole)}
//             </Badge>
//           </div>
//         </div>

//         <div className="pt-4 border-t space-y-2">
//           <Button variant="outline" className="w-full justify-start" asChild>
//             <a href="/profile/settings">
//               <Settings className="w-4 h-4 mr-2" />
//               Налаштування профілю
//             </a>
//           </Button>

//           <Button
//             variant="outline"
//             className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
//             onClick={handleSignOut}
//             disabled={isSigningOut}
//           >
//             <LogOut className="w-4 h-4 mr-2" />
//             {isSigningOut ? "Виходимо..." : "Вийти з системи"}
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   // Компактна версія для навігації
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-10 w-10 rounded-full">
//           <Avatar className="h-10 w-10">
//             <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
//             <AvatarFallback className="bg-church-primary text-white font-semibold">
//               {user?.name?.charAt(0)?.toUpperCase() || "U"}
//             </AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className="w-64" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-2">
//             <div className="flex items-center space-x-2">
//               <p className="text-sm font-medium leading-none">{user?.name}</p>
//               <Badge
//                 variant="outline"
//                 className={`${getRoleColor(userRole)} text-xs`}
//               >
//                 {getRoleIcon(userRole)}
//               </Badge>
//             </div>
//             <p className="text-xs leading-none text-muted-foreground">
//               {user?.email}
//             </p>
//           </div>
//         </DropdownMenuLabel>

//         <DropdownMenuSeparator />

//         <DropdownMenuItem asChild>
//           <a href="/profile" className="cursor-pointer">
//             <User className="mr-2 h-4 w-4" />
//             <span>Мій профіль</span>
//           </a>
//         </DropdownMenuItem>

//         <DropdownMenuItem asChild>
//           <a href="/profile/settings" className="cursor-pointer">
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Налаштування</span>
//           </a>
//         </DropdownMenuItem>

//         <DropdownMenuSeparator />

//         <DropdownMenuItem
//           className="text-red-600 focus:text-red-600 focus:bg-red-50"
//           onClick={handleSignOut}
//           disabled={isSigningOut}
//         >
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>{isSigningOut ? "Виходимо..." : "Вийти"}</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
