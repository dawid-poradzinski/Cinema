import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieShortDesc from '../components/MovieShortDesc';
import { getAllMovies } from '../Endpoints';

const Repertoire = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(getAllMovies).then((response) => {
          let responseData = response.data;
          const movies = responseData.map((single) => <MovieShortDesc key={single.id} data={single}/>);
          setData(movies);
          console.log(responseData);
        }).catch(e => {
          alert(e);
        });
      }, []);

    return ( 
        <div className="flex space-x-4 p-4 shrink-0">
            {data}
        </div>
     );
}
 
export default Repertoire;