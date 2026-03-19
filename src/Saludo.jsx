function Saludo() {

    let nombre = "Jesus";

    let a = 10;
    let b = 3;
    let res = a+b;

    return (
        <>
            <h1>Hola {nombre} desde variable</h1>
            <p>La suma total de {a} + {b} es: {res}</p>
        </>
    )
}

export default Saludo