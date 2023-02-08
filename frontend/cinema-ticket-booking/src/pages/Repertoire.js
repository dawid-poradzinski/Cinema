import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieShortDesc from '../components/MovieShortDesc';
import { getAllMovies } from '../Endpoints';

const Repertoire = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post(getAllMovies).then((response) => {
      let responseData = response.data;
      const movies = responseData.map((single) => <MovieShortDesc key={single.id} data={single} />);
      setData(movies);
      console.log(responseData);
    }).catch(e => {
      alert(e);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full pt-24 px-6">
      <p className="text-5xl md:text-6xl text-center mt-9 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500">Repertuar</p>
      <input type="text" placeholder="Szukaj filmu" className="max-w-xl lg:max-w-2xl bg-zinc-800/50 mb-12 shadow-xl" />
      <div className="flex flex-wrap justify-center max-w-2xl lg:max-w-6xl self-center gap-3 md:gap-5 pb-10 ">
        {data}
      </div>
    </div>

  );
}

export default Repertoire;