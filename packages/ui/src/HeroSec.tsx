
export const HeroSec = () => {
    return (
        <div className="flex items-center flex-col mt-10 lg:mt-20">
            <div className="hidden lg:block relative mx-auto items-center justify-between text-2xl lg:text-7xl font-extrabold font-serif">
                Help customers instantly
            </div>
            <div className="block lg:hidden relative mx-auto items-center justify-between text-3xl font-extrabold font-serif">
                Help customers
            </div>
            <div className="hidden lg:block relative mx-auto items-center justify-between text-2xl lg:text-7xl font-extrabold font-serif">
                with an&nbsp;<span className="text-blue-500">AI-driven</span>&nbsp;chatbot
            </div>
            <div className="block lg:hidden relative mx-auto items-center justify-between text-3xl font-extrabold font-serif">
                instantly with
            </div>
            <div className="block lg:hidden relative mx-auto items-center justify-between text-3xl font-extrabold font-serif">
                an&nbsp;<span className="text-blue-500">AI-driven</span>&nbsp;
            </div>
            <div className="block lg:hidden relative mx-auto items-center justify-between text-3xl font-extrabold font-serif">
                chatbot
            </div>
            <div className="relative flex items-center justify-between  lg:max-w-2xl font-mulish font-bold text-sm text-gray-500 max-w-72 ml-3 lg:px-0 lg:ml-0 lg:text-2xl mt-8">
                ChatBot scans your provided images to provide quick and accurate AI-generated answers to customer questions.
            </div>
            <div className="mt-20 lg:flex lg:mx-0 relative">
                <input placeholder="Enter your email " className="border-2 shadow-sm py-2 px-4 hover:bg-slate-50 transition-all duration-200 focus:bg-slate-100 border-black lg:py-4 lg:pl-6 lg:text-xl lg:pr-24 rounded-lg w-72 lg:w-auto lg:rounded-2xl" type="text"/>
                <div className="flex justify-center ml-2 pt-1 ">
                    <button type="button" className="block lg:hidden absolute -left-0 mt-2 mb-10 py-2 text-xl text-white transition-all duration-200 bg-red-500 hover:bg-blue-700 font-semibold rounded-lg focus:outline-none w-72">Sign up Free</button>
                    <button type="button" className="hidden lg:block text-white transition-all duration-200 bg-blue-700 hover:bg-blue-800 font-semibold rounded-2xl mt-0.5 text-lg px-10 py-4 me-2 mb-2 focus:outline-none">START FREE TRIAL</button>
                </div>
            </div>
        </div>
    );
};
