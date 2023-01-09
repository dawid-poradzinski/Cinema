import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiURL = "http://localhost:8080/people";
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      let responseData = response.data;
      responseData = responseData.slice(0, responseData.length - 1).slice(1).split(",");
      let list = responseData.map(element => <p key={element} className="names">{element}</p>);
      setData(list);
    });
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
