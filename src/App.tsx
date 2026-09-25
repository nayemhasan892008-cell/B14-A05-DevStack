import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const  technologyFetch = async()=>{
  const res = await fetch("/public/data.json")
  const data =await res.json()
  return data
};



function App() {
  
  const [TechnologyPromise] = useState(()=>technologyFetch())

  return (
    <>
       
     <Navbar />
     <Banner />
    
     <Suspense fallback='Loading.....'>
       <Technology TechnologyPromise={TechnologyPromise} />
     </Suspense>



     <Footer />
    <ToastContainer position="top-right" />

  
    </>
  );
}

export default App;
