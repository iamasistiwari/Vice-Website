
export const AppBar = () => {
    return <nav className="h-16 lg:h-20 border-gray-200 border flex items-center">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
            <a href="/">
                <img src="https://www.chatbot.com/chatbot-logo.svg" className="ml-4 lg:ml-0" height={133} width={133} alt="Chat Bot Logo"></img>
            </a>
            <ul className="space-x-7 hidden lg:flex">
                <li className="text-black font-semibold font-mulish hover:text-gray-500 cursor-pointer transition-all duration-200 relative group">Product</li>
                <li className="text-black font-semibold font-mulish hover:text-gray-500 cursor-pointer transition-all duration-200 relative group">Pricing</li>
                <li className="text-black font-semibold font-mulish hover:text-gray-500 cursor-pointer transition-all duration-200 relative group">Integration</li>
                <li className="text-black font-semibold font-mulish hover:text-gray-500 cursor-pointer transition-all duration-200 relative group">Resources</li>
            </ul>
            <div className="flex">
                <a href="/api/auth/signin">
                    <button type="button" className=" py-2 lg:py-2.5 px-3 mr-3 lg:mr-0 lg:px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-xl border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-200 border-gray-600 hover:text-white hover:bg-gray-700">Log in</button>
                </a>
            </div>
        </div>
    </nav>
}