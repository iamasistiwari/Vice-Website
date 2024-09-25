import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export const Greeting = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user.name || "User"
    return (
        <div className="flex flex-col justify-center items-center text-white mt-64">
            <div className="flex flex-col items-center">
                <p className="font-extrabold text-transparent text-3xl lg:text-6xl animate-pulse bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hello, {userName}
                </p>
                <p className="font-extrabold text-gray-600 mt-1 lg:text-6xl lg:mt-6">
                    How can I help you today?
                </p>
            </div>
        </div>
    );
}
