const Login = () => {
    return (
        <div className="md:w-screen md:h-screen pt-16 md:flex md:items-center md:justify-center">
            <div className="flex md:h-[35rem] md:w-full md:max-w-5xl mx-1.5 rounded-md overflow-auto md:shadow-xl">
                <div style={{ backgroundImage: 'url("/photo1.jpg")' }} className="hidden md:block md:h-full w-4/6 bg-center bg-cover">
                </div>
                <div className="flex flex-col w-full md:w-auto h-full justify-center space-y-5 bg-zinc-800 p-5 md:p-11">
                    <div className="text-center space-y-3">
                        <p className="text-3xl font-bold">Zaloguj się</p>
                        <p className="text-xs">I odkryj pełnię świata filmów</p>
                    </div>
                    <div>
                        <form className="space-y-2">
                            <input type="email" placeholder="Adres e-mail" />
                            <input type="password" placeholder="Hasło" />
                            <button className="customButton bg-orange-700 !mt-5 hover:bg-orange-600">Zaloguj się</button>
                        </form>
                    </div>
                    <div className="w-full bg-zinc-600 h-px"></div>
                    <div className="space-y-3">
                        <p className="text-zinc-500 text-sm text-center">Nie masz u nas konta?</p>
                        <div className="customButton bg-yellow-700 hover:bg-yellow-600 text-center flex justify-center items-center">
                            <p>Zarejestruj się</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;