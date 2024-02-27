import { useState, useEffect } from "react";

const Projects = (props) => {
    return (
        <div className="flex flex-col justify-center items-center m-2 text-center bg-white shadow-md overflow-hidden w-72 h-56 sm:m-4">
            <div>
                <h1 className="text-black font-bold">{props.h1}</h1>
                <p className="text-black m-3 font-semibold">{props.p}</p>
            </div>
            <div className="botao flex justify-center items-center">
                <div className="m-2">
                    <a href={props.href} download>
                        <button className="text-center bg-green-400 hover:bg-green-500 w-16 h-10 text-white font-semibold rounded">{props.button}</button>
                    </a>
                </div>
                <div>
                    <a href={props.href1}>
                        <button className="teste text-center bg-green-400 hover:bg-green-500 w-16 h-10 text-white font-semibold rounded">{props.teste}</button>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Projects;