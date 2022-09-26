import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  //this makes the dashboard to have its own Unique Navbar starts.....
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  //Ends here
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
