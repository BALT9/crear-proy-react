export async function getData(){
    // URL para consumo de api 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Valida que la peticion este correcta
    if(!response.ok){
        throw new Error("Error en la petición");
    }

    // Convierte la respuesta de response a formato json
    const data = await response.json();

    // console.log(data);

    return data;

}