import NavBar from "components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({Component,pageProps}:AppProps) {
    return (
        <>
            <NavBar/>
            <Component {...pageProps}/>
            <span>Hello</span>
            <style>{`
            .active {
                color: tomato;
            }
            `}</style>
        </>
    )
}
