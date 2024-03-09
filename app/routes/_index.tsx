import type {MetaFunction} from "@remix-run/node";
import {useState} from "react";
import parse from 'html-react-parser';

export const meta: MetaFunction = () => {
    return [
        {title: "SVG Blank Remover"},
        {name: "description", content: "SVG Blank Remover"},
    ];
};

export default function Index() {
    let [viewbox, setViewbox] = useState('');
    let [input, setInput] = useState('');
    return (
        <div className={"flex flex-col justify-center items-center bg-black text-white h-screen"}>
            <h1 className={"font-bold text-2xl m-5"}>SVG Blank Space Remover</h1>
            <input onChange={e => setInput(e.target.value)} value={input} className={"m-5 outline-none p-2 bg-black border-2 border-neutral-700 rounded-md"} type="code" placeholder={"Your SVG Code"}/>
            <button onClick={() => {
                var svg = document.getElementById("svg");
                var bbox = svg?.getElementsByTagName("svg")[0].getBBox()
                setViewbox(`${bbox?.x} ${bbox?.y} ${bbox?.width} ${bbox?.height}`);
            }} className={"m-5 p-3 bg-black border-2 border-neutral-700 rounded-md transition-all hover:bg-neutral-900"}>Convert</button>
            <div className={"text-center"}>
                <h2 className={"font-bold text-xl m-5"}>New ViewBox:</h2>
                <p>{viewbox}</p>
            </div>
            <div className={"absolute invisible h-[1px] w-[1px]"} id={"svg"}>{parse(input)}</div>
        </div>
    );
}
