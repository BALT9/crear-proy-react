import { useEffect, useState } from "react"

// Fetch
import { getData } from "./api/api";
// Axios
import { getDataAxios } from "./api/axios";

function App() {

  const [user, setUser] = useState([]);

  async function getUser() {
    const data = await getData();
    setUser(data);
    console.log(data);
  }

  async function getUserAxios() {
    try {
      const data = await getDataAxios();
      setUser(data)
    } catch (error) {
      console.error("Error: ", error);
    }
  }



  useEffect(() => {
    // getUser()
    getUserAxios()
  }, [])

  return (
    <>

      <h1>Users con Axios</h1>

      <h1>Users con Fetch</h1>

      <div className="flex flex-wrap justify-center">
        {
          user.map((x) => (
            <div key={x.id} className="w-50 h-50 m-5 shadow-lg rounded-md">
              <h1 className="text-red-500">{x.name}</h1>
              <p>{x.email}</p>
              <p className="bg-blue-500 py-2 px-5 rounded-full">{x.address.street}</p>
              <div className="p-4 flex">
                <button className="mx-2 bg-yellow-500 text-white rounded-md px-3">Editar</button>
                <button className="mx-2 bg-red-500 text-white rounded-md px-3">Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>

      <pre>{JSON.stringify(user, null, 2)}</pre>

    </>
  )
}

export default App
