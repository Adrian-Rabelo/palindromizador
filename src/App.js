import React, { useState } from "react";
import "./App.css";
import Numero from "./components/Numero.js";

export default function App() {
    const [num, setNum] = useState(10);
    let n1 = 50;
    return (
        <>
            <p>Valor do state num em App: {num}</p>
            <Numero num={num} setNum={setNum} />
        </>
    );
}
