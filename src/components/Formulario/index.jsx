import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    },[]);

    useEffect(() => {
        console.log("materia A mudou: " + materiaA);
    },[materiaA, materiaB, materiaC]);


    const alteraNome = (evento) => {
        setNome(evento.target.value);
    };

    const calculaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            setResultado(`Olá ${nome}, você foi aprovado.`);
        } else {
            setResultado(`Olá ${nome}, você não foi aprovado.`);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={(evento) => setMateriaA(evento.target.value ? parseInt(evento.target.value) : 0)} />
            <input type="number" placeholder="Nota matéria B" onChange={(evento) => setMateriaB(evento.target.value ? parseInt(evento.target.value) : 0)} />
            <input type="number" placeholder="Nota matéria C" onChange={(evento) => setMateriaC(evento.target.value ? parseInt(evento.target.value) : 0)} />

            <button type="button" onClick={calculaResultado}>Calcular Resultado</button>

            <p>{resultado}</p>
        </form>
    );
};

export default Formulario;
