/* eslint-disable */


// import Footer from "@/components/footer";
// import Navbar from "@/components/Navbar";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {

//   return ( 
//     <div> 

//   <Navbar/>
//   <Component {...pageProps} />
//   <Footer />


//   </div> 

// )
// }


import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isSchedulePage = router.pathname === '/schedule'; // Adjust this path if your schedule page has a different route

  return ( 
    <div> 
      <Navbar/>
      <Component {...pageProps} />
      {!isSchedulePage && <Footer />}
    </div> 
  )
}

