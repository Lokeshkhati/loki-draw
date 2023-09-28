import UndoRedo from "./UndoRedo"
import ZoomInOut from "./ZoomInOut"

const Footer = () => {
    return (
        <div className=" text-[#a4a4a4] flex justify-between items-center  ">
            <div className=" flex gap-5">
                <ZoomInOut />
                <UndoRedo />
            </div>
            <button className="bg-[#272727] border border-[#3d3d3d]  rounded-md p-2"> Scroll back to content</button>
            <div></div>
        </div>
    )
}
export default Footer