import { useState, useEffect } from "react";

function Download() {

    useEffect(() => {
        document.title = 'Download';
      }, []);

    return (
        <div className="text-center m-4">
            <h1 className="">Calma, estamos trabalhando nisso!!!</h1>
            <div className="flex items-center justify-center m-10">
                <img className="" src="./imgs/fotodopatrick.jpg" />
            </div>
        </div>
    )
}

export default Download;