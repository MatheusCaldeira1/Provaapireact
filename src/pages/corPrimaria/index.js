import axios from "axios"
import { useState } from "react"
export default function Index(){
    const[cor,setCor]=useState('');

    function verificarCorPrimaria(){
        
    }

    return(
        <main> 
        <h1> Cor primaria </h1>
        <div> 
            Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
        </div>

        <div>
            <button onClick={verificarCorPrimaria}> Verificar</button>
        </div>
        <div>
            É cor primaria
        </div>
        </main>
    )

}