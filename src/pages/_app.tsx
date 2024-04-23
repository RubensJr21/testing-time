import "@/styles/global.css";
import { AppProps } from "next/app";
import { StrictMode } from "react";

function MyApp({Component, pageProps} : AppProps){
    return (
        <StrictMode>
            <Component {...pageProps} />
        </StrictMode>
    )
}

export default MyApp