'use client'
const ScrollToContentButton = () => {
    const scrollToContent = () => {
        window.scrollTo(0, 0)
    }
    return (
        <button className="bg-[#272727] border border-[#3d3d3d]  rounded-md p-2 text-[#b8b8b8] absolute left-2/4 bottom-6 -translate-x-1/2 -translate-y-1/2 " onClick={scrollToContent}> Scroll back to content</button>
    )
}
export default ScrollToContentButton