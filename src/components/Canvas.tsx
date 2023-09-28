"use client"
import { useLayoutEffect, useState } from "react";

const Canvas = () => {
    const [elements, setElements] = useState([])
    const [isDrawing, setIsDrawing] = useState(false)

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d")!
        context.fillStyle = "green";
        context.fillRect(10, 10, 150, 100);


    }, [])

    const handleMouseDown = () => { }
    const handleMouseUp = () => { }
    const handleMouseMove = () => { }

    return (
        <canvas id='canvas' width={window.innerWidth} height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        > Canvas</canvas>

    )
}

export default Canvas