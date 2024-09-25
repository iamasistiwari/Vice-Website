import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import prisma  from "@repo/db/prisma"
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface Session{
        user: {
            id: string;
            name: string | null;
            email: string | null;
        }
    }
}

interface Credentials{
    name: string,
    email: string,
    password: string
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text", placeholder: "John Doe"},
                email: { label: "Email", type: "text", placeholder: "john@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Credentials | undefined){
                if (!credentials) {
                    return null;
                }
                const { name, email, password } = credentials;
                if(!name || !email || !password){
                    return null
                }
                // const session = await getServerSession(AuthOptions);
                // if(session && session.user){
                //     return null
                // }
                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email
                    }
                })
                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
                    if(passwordValidation){
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email,
                        }
                    }
                    return null;
                }
                try{
                    const user = await prisma.user.create({
                        data: {
                            name: name,
                            email: email,
                            password: hashedPassword
                        }
                    })
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email,
                    }
                }catch(e){
                    console.log(e)
                }
                return null
            }
        })
    ],
    secret: process.env.JWT_SECRET || "AshishJsonWebToken",
    callbacks: {
        async session({ token, session }: {token: JWT, session: Session}) {
            session.user.id = token.sub as string
            return session
        }
    }
}