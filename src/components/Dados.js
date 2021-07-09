import React from "react";

export default function Dados(props) {
    return (
        <section>
            <p>Dev: {props.dev}</p>
            <p>GitHub: {props.github}</p>
            <p>Curso: {props.curso} </p>
        </section>
    );
}
