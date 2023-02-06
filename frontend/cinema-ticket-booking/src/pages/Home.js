const Home = () => {
    return ( 
        <div>
            <div style={{backgroundImage: 'url("/photo0.jpg")'}} className="flex items-end w-screen h-[30rem] lg:h-[35rem] bg-center bg-cover">
                <div className="p-8 lg:p-14 space-y-4">
                    <p className="text-3xl lg:text-6xl font-bold">Witaj w Kinie!</p>
                    <p className="lg:text-xl">Zobacz, co dla Ciebie przygotowaliśmy</p>
                </div>
            </div>
        </div>
     );
}
 
export default Home;