import Collaboration from "./Collaboration"
import Menu from "./Menu"
import Toolbar from "./Toolbar"

const Navbar = () => {
    return (
        <div className='relative'>
            <div className=" flex justify-between items-center text-[#b8b8b8]">
                <Menu />
                <Toolbar />
                <Collaboration />
            </div >
        </div >
    )
}
export default Navbar