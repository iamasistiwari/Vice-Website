import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"



export const ProfileDetails = async () => {
    const session = await getServerSession(authOptions)
    const email = session?.user.email || "useremail@gmail.com"
    return <div className="text-white flex justify-center h-screen items-center">
        <div className="border-2 shadow-lg shadow-blue-950 border-blue-800 px-10 py-10 mb-32 rounded-3xl flex flex-col justify-center items-center">
            <p className="text-3xl lg:text-5xl font-bold mb-4">Signed in as</p>
            <p className="text-sm lg:text-md text-gray-400">{email}</p>
            <a href="/api/auth/signout">
                <button className="items-center text-white text-lg font-semibold bg-blue-500 px-10 py-3 rounded-3xl mt-14">Sign out? </button>
            </a>
        </div>
    </div>
}