import axios from "axios";

export async function getDataAxios() {

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log(response.data);

        return response.data;

    } catch (error) {
        throw new Error('Error al llamar la api')
    }
}