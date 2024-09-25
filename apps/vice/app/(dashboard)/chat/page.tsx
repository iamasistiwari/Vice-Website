import { Greeting } from "../../../components/Greeting";
import UserInput from "../../../components/InputDiv";
import { TopBar } from "../../../components/TopBar";





export default function Page() {
    return <div className="min-h-screen bg-zinc-800">
        <TopBar />
        <Greeting />
        <UserInput />
    </div>
}
