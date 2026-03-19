function Portada() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-300 text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenido a Nuestro Instituto</h1>
                <p className="text-lg mb-6 text-gray-800">Formamos los mejores profecionales</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700">Inscribirme</button>
            </div>
        </>
    )
}

export default Portada