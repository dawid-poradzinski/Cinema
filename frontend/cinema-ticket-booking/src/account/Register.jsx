const Register = () => {
    return (
        <div className="loginPageFormContent">
            <div className="text-center space-y-3">
                <p className="text-3xl font-bold">Zarejestruj się</p>
                <p className="text-xs">I odkryj pełnię świata filmów</p>
            </div>
            <div>
                <form className="space-y-2">
                    <input type="text" placeholder="Adres e-mail" />
                    <input type="text" placeholder="Nazwa użytkownika" />
                    <input type="password" placeholder="Hasło" />
                    <input type="password" placeholder="Powtórz hasło" />
                    <button className="customButton bg-orange-700 !mt-5 hover:bg-orange-600">Zarejestruj się</button>
                </form>
            </div>
            <p className="text-zinc-500 text-sm text-center space-y-3">Rejestrując się w naszym serwisie akceptujesz Warunki Użytkowania oraz Politykę Prywatności</p>
        </div>
    );
}

export default Register;