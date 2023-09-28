import Collaboration from "./Collaboration"
import Menu from "./Menu"
import Toolbar from "./Toolbar"

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center">
            <Menu />
            <Toolbar />
            <Collaboration />
        </div>
    )
}
export default Navbar