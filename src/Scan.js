import { useState } from "react"

export default function Scan(props){
    const[Valor, setValor] = useState(props.n1);

    //let msgErro = null
    let retorno = Valor;
    if(Valor === (props.n1 - 1)){
        retorno = "Você está abaixo do valor esperado!"
    }

    const diminuiValor = () => {
        if(Valor !== (props.n1-1)){
            setValor(Valor - 1);
        }
    }

    const aumentaValor = () => {
        if(Valor < props.n2)
            setValor(Valor + 1);
    }

    return(
        <>
            <div className="flex.">
                <button className="btn btn-danger" onClick={diminuiValor}>-</button>
                <span style={{padding:150}}>{retorno}</span>
                <button className="btn btn-primary" onClick={aumentaValor}>+</button>
            </div>
        </>
    )
        
    
}