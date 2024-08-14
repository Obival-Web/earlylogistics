"use client"
import { useEffect } from "react";

export function Random () {
    const [num,setNum] = useState(0);

    useEffect(() => {

    function generateRandom () {
        setNum(Math.round(Math.random() *10))
    }

    generateRandom()
},[]);

    return (
        <div className="p-4 bg-rose-800">
            <p className="text-6xl text-rose-400 text-center">{(num)}
        </div>
    )
}