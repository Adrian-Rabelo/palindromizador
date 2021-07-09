import React from "react";
import Pinto from "./components/img/pinto-transp.png";
export default function App() {
    const prog = () => {
        return "Rabelinho Dev";
    };
    function curso() {
        return "Curso de React";
    }
    return (
        <section>
            <header>
                <p>{"Programador: " + prog()}</p>
                <br />
                <p>{"Curso: " + curso()}</p>
            </header>
            <section>
                <img src={Pinto} />
                <img src="/img/euzim-transp.png" />
            </section>
        </section>
    );
}
