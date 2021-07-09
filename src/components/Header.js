import React from "react";
import Eu from "./img/euzim-transp.png";

export default function Header() {
    return (
        <header>
            <h1>
                Rabelinho <img src={Eu} width="50" alt="Rabelinho Dev" />
            </h1>
        </header>
    );
}
