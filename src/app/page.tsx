import Canvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (

    <div className="relative h-full w-full inset-0 overflow-hidden text-[#b8b8b8] flex">
      <div className=' absolute  w-full h-full ' >
        <div className=" p-4 w-full h-full ">
          <Navbar />
        </div>
        <Footer />
        <button className="bg-[#272727] border border-[#3d3d3d]  rounded-md p-2 text-[#b8b8b8] absolute left-2/4 bottom-6 -translate-x-1/2 -translate-y-1/2 "> Scroll back to content</button>
      </div>
      <Canvas />
    </div>
  )
}

export default Home