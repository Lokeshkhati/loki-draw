import Box from "./Box"

const ToolBox = () => {
    const strokeColors = ['white', 'pink', 'green', 'blue', 'orange']
    const bgColors = ['white', 'pink', 'green', 'blue', 'orange']
    const fontSizes = ['S', "M", "L", "XL"]
    const fontFamilies = ['Hand-drawn', 'Normal', 'Code']

    return (
        <div className=" relative shadow-[0px 13px 33px rgba(0, 0, 0, .07), 0px 4.13px 9.94853px rgba(0, 0, 0, .0456112), 0px 1.13px 4.13211px rgba(0, 0, 0, .035), 0px .769896px 1.4945px rgba(0, 0, 0, .0243888);] h-[35rem] w-[12rem] bg-[#272727] rounded-md p-2 ">
            <Box data={strokeColors} heading="Stroke" renderData={(color: string) => <button key={color} className="w-[1.3rem] h-[1.3rem] rounded-sm " style={{ background: color }} />} />

            <Box data={bgColors} heading="Background" renderData={(color: string) => <button key={color} className="w-[1.3rem] h-[1.3rem] rounded-sm " style={{ background: color }} />} />

            <Box data={fontSizes} heading="Font Size" renderData={(fontSize: string) => <button key={fontSize} className="border w-[2rem] h-[2rem] rounded-md"  >{fontSize}</button>} />

            <Box data={fontFamilies} heading="Font Family" renderData={(fontFamily: string) => <button key={fontFamily} className="border w-[2rem] h-[2rem] rounded-md"  >{fontFamily === "Hand-drawn" && "A" || fontFamily === "Normal" && "B" || fontFamily === "Code" && "C"}</button>} />
        </div>
    )
}
export default ToolBox