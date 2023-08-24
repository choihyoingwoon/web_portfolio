import "@/styles/globals.css";
import "@/styles/fonts/font.css";
import type { AppProps } from "next/app";
import "react-awesome-slider/dist/styles.css"; // 'react-awesome-slider' 패키지의 글로벌 CSS를 import

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
