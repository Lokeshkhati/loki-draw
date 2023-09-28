
const Box = ({ data, renderData, heading }: { data: string[], renderData: any, heading: string }) => {
    return (
        <div className="mb-2">
            <h2>{heading}</h2>
            <div className="flex gap-2">
                {data.map(renderData)}
            </div>
        </div>
    )
}
export default Box