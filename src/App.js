import React, { useState } from "react";
import "./App.css";
import Numero from "./components/Numero.js";
import PalavraRevertida from "./components/PalavraRevertida";

export default function App() {
    let [color, setColor] = useState("");
    let [input, setInput] = useState("");
    let [pReverso, setPReverso] = useState("");
    function reverterPalavra(palavra) {
        return palavra.split("").reverse().join("");
    }
    function teste() {
        return <PalavraRevertida palavraRevertida={reverterPalavra(input)} />;
    }

    return (
        <>
            <section className="geral">
                <section>
                    <div className="textoEntrada">
                        <h1>Texto atualizador</h1>
                        <input
                            type="text"
                            id="texto"
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <button className="reverter">Reverter !</button>
                    </div>
                </section>
                <section>
                    <div className="textoEscrito">
                        <h1>
                            <p>Seu texto</p>|<br />v<p>{input}</p>
                            <PalavraRevertida
                                palavraRevertida={reverterPalavra(input)}
                            />
                        </h1>
                    </div>
                </section>
            </section>
        </>
    );
}
