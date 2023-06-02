import "@/styles/globals.css";
import store from "../Components/Store/store";
import { Provider } from "react-redux";
// import NextNProgress from "nextjs-progressbar"; 
export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <NextNProgress color={'blue'}/> */}
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  );
}
