import Head from "next/head";
import { useSession, signIn, signOut} from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";


export default function Auth() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading />
    }
    
    return <>
        <Head>
            <title>Movie App | Backend</title>
        </Head>

        <div className = "container">
            <div className = "loginfront flex flex-center">
                <div className = "loginbox flex flex-col">
                    <Image src = "/img/coder.png" width = {250} height = {250}/>
                    <h1>Welcome Admin</h1>
                    <p>Visit our main website<a href = "https://vbmcoder.in/">Vihaan</a></p>
                    {session ? <button className = "mt-2" onClick = {signOut}>Log Out</button> : <button className = "mt-2" onClick = {signIn}>Login wtih Google</button>}
                </div>
            </div>
        </div>
     

    </>
}