import Projects from "../Components/Projects";
import { useState, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



function Home() {

    useEffect(() => {
        document.title = 'AntonioPedroDev';
    }, []);

    const [borderColor, setBorderColor] = useState("border-red-500"); // Comece com a cor vermelha
    const colors = [
        "border-blue-500",
        "border-green-500",
        "border-yellow-500",
        "border-pink-500",
        "border-purple-500",
    ]; // Array com as cores que você deseja usar para a borda

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBorderColor((prevColor) => {
                const currentIndex = colors.findIndex((color) => color === prevColor);
                const nextIndex = (currentIndex + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 1000); // Intervalo de tempo em milissegundos

        return () => clearInterval(intervalId);
    }, []);

    return (
        <body className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center m-4">
                <img className={`rounded-full w-28 h-28 border-4 ${borderColor} transition duration-500`} src="./imgs/perfildev.jpeg" />
            </div>
            <h3 className=" text-center font-semibold text-md sm:text-xl">Antônio Pedro</h3>
            <p className="text-center text-xs sm:text-base">Desenvolvedor Android Java/Kotlin <br /> aqui estão alguns dos meus projetos, todos estão no meu <a href="https://github.com/Antoniop87" className="text-blue-500 hover:text-blue-700">github</a></p>
            <div className="sm:flex">
            <Projects
                    className=""
                    h1={"NEAPlayKids"}
                    p={"Projeto focado em educação infantil. Esse projeto foi usado como o meu TCC na faculdade"}
                    href={"./arquivos/neaplaykids.apk"}
                    button={"APK"}
                    href1={"https://github.com/Antoniop87/Nick"}
                    teste={"Source"}
                />
                <Projects
                    className=""
                    h1={"HB Running"}
                    p={"Projeto que serviu como estudos. Criei um site para uma assessoria de corrida"}
                    href={"https://hbrunning-six.vercel.app/"}
                    button={"Site"}
                    href1={"https://github.com/Antoniop87/HB-Running"}
                    teste={"Source"}
                />
              
            </div>
            <div className="sm:flex">
            <Projects
                    className=""
                    h1={"Ceep"}
                    p={"Aplicativo Android que salva notas tanto no cache do dispositivo, tanto em uma api"}
                    href={"/download"}
                    button={"APK"}
                    href1={"https://github.com/Antoniop87/App_consumindo_api"}
                    teste={"Source"}
                />
                <Projects
                    className=""
                    h1={"Pokedex"}
                    p={"Pokedex Android, fiz esse app consumindo a api do pokemon que disponibiliza todos os pokemons"}
                    href={"/download"}
                    button={"APK"}
                    href1={"https://github.com/Antoniop87/PokedexApp"}
                    teste={"Source"}
                />
            </div>
            <div className="sm:flex">
            <Projects
                    className=""
                    h1={"SocketChat"}
                    p={"Aplicativo de chat em tempo real que fiz usando socket e Java"}
                    href={"./arquivos/app-debug.apk"}
                    button={"APK"}
                    href1={"https://github.com/Antoniop87/SocketChat"}
                    teste={"Source"}
                />
                <Projects
                    className=""
                    h1={"Projeto Desktop"}
                    p={"Projeto desktop com crud. Fiz esse projeto para a disciplina de poo na faculdade. Usei JDBC Swing"}
                    href={"/download"}
                    button={"EXE"}
                    href1={"https://github.com/Antoniop87/projetodesktop"}
                    teste={"Source"}
                />
            </div>
            <div>
                <button className=" text-gray-500 hover:text-green-400"  target="_blank">
                    <a href="https://wa.me/5581995362804">
                        <FaWhatsapp size={30} />
                    </a>
                </button>
                <button className="text-gray-500 hover:text-purple-500"  target="_blank">
                    <a href="https://www.instagram.com/pedroo.kt/">
                        <FaInstagram size={30} />
                    </a>
                </button>
                <button className="text-gray-500 hover:text-blue-500">
                    <a href="https://www.linkedin.com/in/ant%C3%B4nio-pedro-067820244/"  target="_blank">
                        <FaLinkedin size={30} />
                    </a>
                </button>
                <button className="text-gray-500 hover:text-red-500">
                    <a href="https://www.youtube.com/channel/UCgPo-kf6bA4zkiTeF7VKIAQ"  target="_blank">
                        <FaYoutube size={30} />
                    </a>
                </button>
            </div>
            <div>
                <h3 className="mb-4 font-semibold text-center text-sm sm:text-base" >Este portfolio foi feito usando React e TailwindCSS</h3>
                <p className="font-semibold text-center">© Antônio Pedro</p>
            </div>
        </body>

    )
}

export default Home;