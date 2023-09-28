import Toolbar from "./Toolbar"

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center">
            <div>Menu</div>
            <Toolbar />
            <div>Collab</div>
        </div>
    )
}
export default Navbar