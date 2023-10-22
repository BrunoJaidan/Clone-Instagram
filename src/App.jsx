import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ConteudoEsquerdo from "../../instagramClone/src/componentes/ConteudoEsquerdo";
import ConteudoCentral from "../../instagramClone/src/componentes/ConteudoCentral";


function App() {
  return (
    <main>
      <ConteudoEsquerdo/>
      <ConteudoCentral/>
    </main>
  );
}


export default App;
