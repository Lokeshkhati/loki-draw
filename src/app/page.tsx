import Canvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToContentButton from "@/components/ScrollToContentButton";

const Home = () => {

  return (

    <div className="relative h-full w-full inset-0 overflow-hidden text-[#b8b8b8] flex">
      <div className=' absolute  w-full h-full ' >
        <div className=" p-4 w-full h-full ">
          <Navbar />
        </div>
        <Footer />
        <ScrollToContentButton />
      </div>
      <Canvas />
    </div>
  )
}

export default Home