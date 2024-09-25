"use client"
import { usePathname, useRouter } from "next/navigation";


export const TopBar = () : JSX.Element => {
    const router = useRouter();
    const pathname = usePathname();
    return <div>
        <div className=" text-white px-4 lg:px-10 pt-4">
            <div className='flex justify-between lg:text-2xl font-semibold lg:tracking-widest'>
                <a href="/chat">
                    <p className="font-extrabold text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">VICE</p>
                </a>
                <ol className='flex '>
                    <div className='flex lg:space-x-16 lg:text-xl font-semibold flex-row justify-center tracking-tighter'>
                        <li className={`cursor-pointer relative group ${pathname === "/chat"? "text-blue-400" : "hover:text-blue-400"}  transition-all duration-200`} onClick={() => { router.push("/chat")}}>Chat
                            <div className="absolute bottom-0 w-full h-0.5 rounded-full bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className={`cursor-pointer relative group ${pathname === "/imageChecker"? "text-blue-400" : "hover:text-blue-400"} mx-3 transition-all duration-200`} onClick={() => { router.push("/imageChecker")}}>Image Checker
                            <div className="absolute bottom-0 w-full h-0.5 rounded-full bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className={`cursor-pointer relative hidden lg:flex group ${pathname === "/contact"? "text-blue-400" : "hover:text-blue-400"}  transition-all duration-200`} onClick={() => { router.push("/contact")}}>Contact
                            <div className="absolute bottom-0 w-full h-0.5 rounded-full bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className={`cursor-pointer relative group ${pathname === "/profile"? "text-blue-400" : "hover:text-blue-400"}  transition-all duration-200`} onClick={() => { router.push("/profile")}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div className="absolute bottom-0 w-full h-0.5 rounded-full bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                    </div>
                </ol>
            </div>
        </div>
    </div>
};