import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    const dev = () => {
        return "Rabelinho dev";
    };

    const git = () => {
        return "github.com/Adrian-Rabelo";
    };

    const curso = "React";

    const somar = (a, b) => {
        return a + b;
    };
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
            <Dados dev={dev} github={git} curso={curso} somar={somar} />
        </section>
    );
}
