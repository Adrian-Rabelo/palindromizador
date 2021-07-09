import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    const dv = "Rabelinho Dev";
    const gh = "Adrian-Rabelo";
    const crs = "React.js";
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Acesse o meu GitHub</p>
            <a
                href="https://www.github.com/Adrian-Rabelo"
                target="_blank"
                rel="noreferrer">
                Clique aqui
            </a>
            <Dados dev={dv} github={gh} curso={crs} />
        </section>
    );
}
