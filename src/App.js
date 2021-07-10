import React, { useState } from "react";
import "./App.css";
import Numero from "./components/Numero.js";

export default function App() {
    let [color, setColor] = useState("");
    let [text, setText] = useState("");
    let texto = document.getElementById("texto");
    return (
        <>
            <section>
                <h1>Texto atualizador</h1>
                <input
                    type="text"
                    id="texto"
                    onChange={() => {
                        setText(texto.value);
                    }}
                />
            </section>
            <section>
                <div>
                    <h1>
                        <p>Seu texto: {text}</p>
                    </h1>
                </div>
            </section>
        </>
    );
}
