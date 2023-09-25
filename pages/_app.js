import Prvider from "@/Redux/Prvider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <Prvider>
        <Component {...pageProps} />
      </Prvider>
    </SessionProvider>
  );
}
