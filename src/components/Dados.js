import React from "react";

export default function Dados(props) {
    let n1 = 10;
    let n2 = 5;
    return (
        <section>
            <p>Dev: {props.dev()}</p>
            <p>GitHub: {props.github()}</p>
            <p>Curso: {props.curso} </p>
            <p>{`A soma de ${n1} + ${n2} é igual a ${props.somar(n1, n2)}`}</p>
        </section>
    );
}
