function Menu() {
    return (
        <>
            <nav className="bg-blue-500 w-full h-20 flex items-center justify-between px-15">
                <div className="w-15 h-15 bg-white rounded-md">
                    <span>LOGO</span>
                </div>
                <div className="flex text-white space-x-5 text-lg">
                    <a href="">Inicio</a>
                    <a href="">Sobre Nosotros</a>
                    <a href="">Contacto</a>
                </div>
            </nav>
        </>
    )
}

export default Menu