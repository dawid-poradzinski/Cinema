import { useState, useEffect } from 'react';
import MovieShortDesc from '../components/MovieShortDesc';

const Repertoire = () => {
      // const apiURL = "http://localhost:8080/people";
    const [data, setData] = useState([{title: "lorem ipsum", description: "gpggpgrjgegpgorgogk"}, {title: "lorem ipsum", description: "2gpggpgrjgegpgorgogk"}]);
    const listItems = data.map((single) => <MovieShortDesc data={single}/>);

    useEffect(() => {
        // axios.get(apiURL).then((response) => {
        //   let responseData = response.data;
        //   responseData = responseData.slice(0, responseData.length - 1).slice(1).split(",");
        //   let list = responseData.map(element => <p key={element} className="names">{element}</p>);
        //   setData(list);
        // });
    
        // console.log(data);
    
    
      }, []);

    return ( 
        <div className="flex space-x-4 p-4 shrink-0">
            {listItems}
        </div>
     );
}
 
export default Repertoire;