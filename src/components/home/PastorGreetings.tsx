// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Container } from "../ui/Container";

// export default function PastorGreeting() {
//   return (
//     <Container>
//       <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
//         {/* Верхня хвиля */}
//         <svg
//           className="absolute top-0 left-0 w-full hidden md:block"
//           viewBox="0 0 1920 43.4"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#f8f9fa"
//             d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1
//              c0,0,139-12.2,458.7,14.3c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
//           />
//         </svg>

//         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
//           {/* === Ліва частина: SVG маска + декор === */}
//           <div className="relative w-full lg:w-1/2 flex justify-center">
//             <svg
//               viewBox="0 0 678 595"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute w-full h-auto"
//             >
//               <defs>
//                 <linearGradient id="BgGradient" gradientTransform="rotate(90)">
//                   <stop offset="0%" stopColor="#22c55e" />
//                   <stop offset="100%" stopColor="#a3e635" />
//                 </linearGradient>
//                 <clipPath id="MaskShape">
//                   <path
//                     d="M635.5,506.9c-51.9,58.8-395.9,51.9-395.9,51.9S-9.3,595,34,410
//                   C65.6,274.7-14.4,69.5,80.6,33.2c49-18.7,351.7-49,487.8,70.9
//                   C696.4,216.7,660.6,478.4,635.5,506.9z"
//                   />
//                 </clipPath>
//               </defs>

//               {/* Градієнтна форма позаду */}
//               <path
//                 fill="url(#BgGradient)"
//                 d="M652.2,493.6c-51.9,58.8-395.9,51.9-395.9,51.9S7.4,581.8,50.6,396.8
//               C82.3,261.5,2.2,56.3,97.3,20c49-18.7,351.7-49,487.8,70.9
//               C713.1,203.4,677.3,465.1,652.2,493.6z"
//               />
//             </svg>

//             {/* Фото пастора */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative w-[90%] max-w-[480px]"
//             >
//               <Image
//                 src="/images/news/01.jpg"
//                 alt="Pastor"
//                 width={700}
//                 height={700}
//                 className="object-cover w-full h-full"
//                 style={{ clipPath: "url(#MaskShape)" }}
//               />
//             </motion.div>

//             {/* Декоративні елементи */}
//             <div className="absolute -left-6 top-8 w-3 h-24 bg-gradient-to-b from-green-500 to-lime-400 rounded-full rotate-12 hidden md:block" />
//             <div className="absolute -right-4 top-10 w-3 h-16 bg-gradient-to-b from-green-400 to-lime-400 rounded-full rotate-[30deg] hidden md:block" />
//             <div className="absolute -bottom-10 left-6 w-16 h-16 rounded-full border-4 border-green-300 hidden md:block" />
//             <div className="absolute -right-6 top-1/4 md:flex flex-col space-y-3 hidden ">
//               <div className="w-3 h-3 bg-green-400 rounded-full" />
//               <div className="w-4 h-4 bg-lime-400 rounded-full" />
//               <div className="w-2 h-2 bg-green-500 rounded-full" />
//             </div>
//           </div>

//           {/* === Права частина: Текст === */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 text-gray-700"
//           >
//             <h6 className="text-green-600 font-semibold mb-3">About us</h6>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Your technical partner towards web success.
//             </h2>
//             <p className="text-lg text-gray-600 mb-4">
//               Our friendly team members are always willing to help you
//               understand your present technology requirements and provide
//               suggestions on your future needs.
//             </p>
//             <p className="text-gray-600 mb-6">
//               Additions can suspected its concealed put furnished. Met the why
//               particular devonshire decisively considered partiality. Certain it
//               waiting no entered is. Passed her indeed uneasy shy polite appear
//               denied. Oh less girl no walk. At he spot with five of view.
//             </p>
//             <p className="font-semibold text-gray-800 mb-8">
//               — Jessica Mores, CEO larexa
//             </p>
//             <Image
//               src="/images/signature.png"
//               alt="signature"
//               width={180}
//               height={80}
//               className="opacity-80"
//             />
//           </motion.div>
//         </div>

//         {/* Нижня хвиля */}
//         <svg
//           className="absolute bottom-0 left-0 w-full hidden md:block"
//           viewBox="0 0 1920 43.4"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#fff"
//             d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1
//              c0,0,139-12.2,458.7,14.3c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
//           />
//         </svg>
//       </section>
//     </Container>
//   );
// }

"use client";

import Image from "next/image";
import { Container } from "../ui/Container";

export default function PastorGreeting() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* top wave */}
      <figure className="absolute top-0 left-0 w-full hidden md:block -mt-2">
        <svg viewBox="0 0 1920 43.4" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
            fill="#f8f9fa"
          />
        </svg>
      </figure>

      <Container>
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: SVG figure with exact shapes/positions */}
          <figure className="w-full">
            <svg
              version="1.1"
              viewBox="0 0 678 595"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient id="BgGradient">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#a3e635" />
                </linearGradient>
              </defs>

              {/* back gradient blob (exact) */}
              <path
                fill="url(#BgGradient)"
                d="M652.2,493.6c-51.9,58.8-395.9,51.9-395.9,51.9S7.4,581.8,50.6,396.8
              C82.3,261.5,2.2,56.3,97.3,20c49-18.7,351.7-49,487.8,70.9C713.1,203.4,677.3,465.1,652.2,493.6z"
              />

              {/* clipPath shape (exact) + image */}
              <defs>
                <path
                  id="mask-shape"
                  d="M635.5,506.9c-51.9,58.8-395.9,51.9-395.9,51.9S-9.3,595,34,410C65.6,274.7-14.4,69.5,80.6,33.2
                c49-18.7,351.7-49,487.8,70.9C696.4,216.7,660.6,478.4,635.5,506.9z"
                />
              </defs>
              <clipPath id="clip">
                <use xlinkHref="#mask-shape" style={{ overflow: "visible" }} />
              </clipPath>
              <g style={{ clipPath: "url(#clip)" }}>
                <image
                  width="700"
                  height="700"
                  xlinkHref="/images/news/01.jpg"
                  transform="matrix(0.9999 0 0 0.9999 1 -81)"
                  style={{ overflow: "visible" }}
                />
              </g>

              {/* decorative elements (exact positions from file) */}
              <circle
                fill="none"
                stroke="url(#BgGradient)"
                strokeWidth="8"
                strokeMiterlimit="10"
                cx="60"
                cy="539"
                r="40"
              />
              <path
                fill="url(#BgGradient)"
                d="M52.6,104.3L25.5,46.5c-2-4.2-0.1-9.4,4.1-11.3l0,0c4.2-2,9.4-0.1,11.3,4.1L68,97
              c2,4.2,0.1,9.4-4.1,11.3l0,0C59.7,110.4,54.6,108.5,52.6,104.3z"
              />
              <path
                fill="url(#BgGradient)"
                d="M48.1,140.6l-12.8-27.2c-2-4.2-0.1-9.4,4.1-11.3l0,0c4.2-2,9.4-0.1,11.3,4.1l12.8,27.2
              c2,4.2,0.1,9.4-4.1,11.3l0,0C55.2,146.7,50.1,144.8,48.1,140.6z"
              />
              <circle fill="url(#BgGradient)" cx="590.9" cy="23.9" r="9.1" />
              <circle fill="url(#BgGradient)" cx="596.8" cy="76.4" r="14.6" />
              <circle fill="url(#BgGradient)" cx="630.8" cy="42.8" r="5.3" />
            </svg>
          </figure>

          {/* RIGHT: text */}
          <div>
            <h6 className="text-accent font-semibold mb-2">About us</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your technical partner towards web success.
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our friendly team members are always willing to help you
              understand your present technology requirements and provide
              suggestions on your future needs.
            </p>
            <p className="text-gray-600 mb-6">
              Additions can suspected its concealed put furnished. Met the why
              particular devonshire decisively considered partiality. Certain it
              waiting no entered is. Passed her indeed uneasy shy polite appear
              denied. Oh less girl no walk. At he spot with five of view.
            </p>
            <p className="font-semibold text-gray-800">
              — Jessica Mores, CEO larexa
            </p>
            <Image
              src="/images/signature.png"
              alt="signature"
              className="mt-6 h-16 w-auto opacity-80"
              width={180}
              height={80}
            />
          </div>
        </div>
      </Container>

      {/* bottom wave */}
      <figure className="absolute bottom-0 left-0 w-full hidden md:block -mb-2">
        <svg viewBox="0 0 1920 43.4" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
            fill="#ffffff"
          />
        </svg>
      </figure>
    </section>
  );
}
