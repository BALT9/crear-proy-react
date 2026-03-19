function Cards(){
    return(
        <>
            <div className="flex justify-center gap-6 p-8 bg-gray-100">
                <div className="bg-white p-6 rounded shadow w-60 text-center">
                    <h1 className="text-xl font-bold mb-2">Card uno</h1>
                    <p className="text-gray-600 mb-4" >Lorem ipsum dolor sit amet.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">Ver más...</button>
                </div>
                <div className="bg-white p-6 rounded shadow w-60 text-center">
                    <h1 className="text-xl font-bold mb-2">Card dos</h1>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">Ver más...</button>
                </div>
                <div className="bg-white p-6 rounded shadow w-60 text-center">
                    <h1 className="text-xl font-bold mb-2">Card tres</h1>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">Ver más...</button>
                </div>
            </div>
        </>
    )
}

export default Cards