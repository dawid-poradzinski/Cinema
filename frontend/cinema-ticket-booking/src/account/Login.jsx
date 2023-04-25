import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="loginPageFormContent">
            <div className="text-center space-y-3">
                <p className="text-3xl font-bold">Zaloguj się</p>
                <p className="text-xs">I odkryj pełnię świata filmów</p>
            </div>
            <div>
                <form className="space-y-2">
                    <input type="text" placeholder="Adres e-mail lub nazwa użytkownika" />
                    <input type="password" placeholder="Hasło" />
                    <button className="customButton bg-orange-700 !mt-5 hover:bg-orange-600">Zaloguj się</button>
                </form>
            </div>
            <div className="w-full bg-zinc-600 h-px"></div>
            <div className="space-y-3">
                <p className="text-zinc-500 text-sm text-center">Nie masz u nas konta?</p>
                <div>
                    <Link to={`/auth/register`}>
                        <div className="customButton bg-yellow-700 hover:bg-yellow-600 text-center flex justify-center items-center">
                            <p>Zarejestruj się</p>
                        </div>
                    </Link>
                </div>


            </div>
        </div>


    );
}

export default Login;