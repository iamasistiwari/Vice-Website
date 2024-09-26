import { AppBar } from "@repo/ui/AppBar"
import { HeroSec } from "@repo/ui/HeroSec"
import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import { redirect } from "next/navigation"
export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session?.user){
    redirect('/chat')
  }
  return <div>
    <div>
      <AppBar />
      <HeroSec />
    </div>
  </div>
}
