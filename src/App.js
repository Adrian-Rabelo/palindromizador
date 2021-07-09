import React from "react";
import "./App.css";
import Relogio from "./components/Relogio";

export default function App() {
    const textoDestaque = {
        color: "#00f",
        fontSize: "3em",
    };
    return (
        <>
            <section className="caixa">
                <Relogio />
                <h1 style={{ color: "#f00", fontSize: "5em" }}>
                    Rabelinho Dev
                </h1>
                <h2 style={textoDestaque}>Curso de React</h2>
                <p className="texto">GitHub: github.com/adrian-rabelo</p>
                <a
                    href="https://www.example.com"
                    rel="noreferrer"
                    target="_blank">
                    Dev Rabelin
                </a>
            </section>
        </>
    );
}
