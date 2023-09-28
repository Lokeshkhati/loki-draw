
import Canvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToolBox from "@/components/ToolBox";

export default function Home() {
  return (

    <div className='p-4' >
      <Navbar />
      <ToolBox />
      <Canvas />
      <Footer />
    </div>
  )
}
