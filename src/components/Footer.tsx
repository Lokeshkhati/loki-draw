import UndoRedo from "./UndoRedo"
import ZoomInOut from "./ZoomInOut"

const Footer = () => {
    return (
        <footer className=" absolute bottom-4 px-4 text-[#a4a4a4] flex justify-between items-center  ">
            <div className=" flex gap-5">
                <ZoomInOut />
                <UndoRedo />
            </div>
            <div></div>
        </footer>
    )
}
export default Footer