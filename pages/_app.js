import GlobalStyle from "../styles/globalStyles";


// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function MyApp({ Component, pageProps }) {


  const theme = {
    colors: {
      primary: "#F26A7E",
      secondary: {
        1: "#69DE5D",
        2: "#FF5C5C",
        3: "#395185",
      },
    },
    fontSize: {
      h1: "42px",
      h2: "32px",
      h3: "28px",
      h4: "20px",
      h5: "18px",
      h6: "16px",
      h7: "14px",
      h8: "12px",
    },
  };

  return (
    <>

            <GlobalStyle />
            <Component {...pageProps} />

    </>
  );
}

export default MyApp;
