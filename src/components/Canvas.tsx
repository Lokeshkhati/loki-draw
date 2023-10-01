"use client"
import { useLayoutEffect, useRef, useState } from "react";

const Canvas = () => {
    const [elements, setElements] = useState([])
    const [isDrawing, setIsDrawing] = useState(false)
    const [canvasSize, setCanvasSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const canvasRef = useRef(null)
    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d")!
        context.fillStyle = "green";
        context.fillRect(100, 100, 200, 200);
    }, [])

    const draw = () => { }
    const handleMouseDown = () => { }
    const handleMouseUp = () => { }
    const handleMouseMove = () => { }

    const handleZoom = (factor: number) => {
        setCanvasSize((prevSize) => ({
            width: prevSize.width * factor,
            height: prevSize.height * factor
        }))
    };

    return (
        <>
            <div className="z-40">
                <button onClick={() => handleZoom(1.2)}>Zoom In</button>
                <button onClick={() => handleZoom(0.8)}>Zoom Out</button>
            </div>
            <canvas ref={canvasRef} id='canvas' width={canvasSize.width} height={canvasSize.height}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            > Canvas</canvas>
        </>
    )
}

export default Canvas
