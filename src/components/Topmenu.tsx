"use client"
// import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';

// export default function Topmenu () {
//     // const session = await getServerSession(authOptions);
//     const [menuOpen, setMenuOpen] = useState<boolean>(false);
//     useEffect(() => {
//         // Function to close the menu when screen width changes to md or larger
//         const handleResize = () => {
//           if (window.innerWidth >= 768) {
//             setMenuOpen(false);
//           }
//         };
    
//         // Add event listener
//         window.addEventListener("resize", handleResize);
    
//         // Clean up the event listener
//         return () => {
//           window.removeEventListener("resize", handleResize);
//         };
//       }, []);

//     return(<nav className="h-[75px] grid grid-cols-2 backdrop-blur-lg  bg-slate-100/70 fixed top-0 left-0 right-0 z-30 border-gray-200 shadow-lg px-5">
//         {/* logo */}
//         <div className="flex flex-1 items-center h-full ml-[10%]">
//         <Link
//                 href="/"
//                 className="flex items-center space-x-2 text-black duration-300 ease-in-out hover:text-[#7A4E9A]"
//                 >
//                 <img
//                     src={"/images/logo/Logo1.png"}
//                     className="filter invert w-[75px] h-[75px] rounded-xl"
//                     alt="logo Icon"
//                 ></img>
//                 <span className="self-center text-[28px] font-poppins font-bold whitespace-nowrap">
//                     StepOut
//                 </span>
//                 </Link>
//             </div>
//              {/* navigation links */}
//              <div className="flex items-center justify-end space-x-[5%] h-full hidden md:flex">
//                 <Link
//                     href="/"
//                     className="flex items-center justify-center h-full py-2 pr-4 pl-3 text-gray-700 font-bold duration-300 ease-in-out hover:bg-[#7A4E9A] hover:text-white"
//                     >
//                     Home
//                 </Link>
//                 <Link
//                     href="/"
//                     className="flex items-center justify-center h-full py-2 pr-4 pl-3 text-gray-700 font-bold duration-300 ease-in-out hover:bg-[#7A4E9A] hover:text-white"
//                     >
//                     Member
//                     </Link>
//                 <a
//                     href="#contact"
//                     className="flex items-center justify-center h-full py-2 pr-4 pl-3 text-gray-700 font-bold duration-300 ease-in-out hover:bg-[#7A4E9A] hover:text-white"
//                     >
//                     Contact
//                 </a>
//             </div>

//             {/* hamburger menu */}
//             <div className="flex items-center justify-end h-full md:hidden">
//                 <button
//                     className="text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                 {/* Hamburger icon */}
//                 <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                     ></path>
//                 </svg>
//                 </button>
//             </div>
//             {/* dropdown menu */}
//             {menuOpen && (
//                 <div className="absolute top-[75px] right-0 backdrop-blur-lg bg-slate-100/70 shadow-lg w-48 py-2 z-40">
//                 <Link
//                     href="/"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     href="/"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     Member
//                 </Link>
//                 <a
//                     href="#contact"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     Contact
//                 </a>
//                 </div>
//             )}
//         </nav>
//     )
// }


export default function TopMenu() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`text-base font-medium px-4 py-2 rounded-lg ${
                pathname === '/' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className={`text-base font-medium px-4 py-2 rounded-lg ${
                pathname === '/education' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              Education & Skills
            </Link>
          </li>
          <li>
            <Link
              href="/achievements"
              className={`text-base font-medium px-4 py-2 rounded-lg ${
                pathname === '/achievements' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              Achievements / Certificate
            </Link>
          </li>
          <li>
            <Link
              href="/activities"
              className={`text-base font-medium px-4 py-2 rounded-lg ${
                pathname === '/activities' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              Activities
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}