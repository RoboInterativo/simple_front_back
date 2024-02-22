import React, { useState,useEffect }  from "react";
import axios from "axios";
//useEffect
function App () {



  //const auth=true;
  const [data,setData]= useState('');
  useEffect ( () =>  {
    axios.post('/api')
        .then(response => {
          console.log(response);
          setData(response.data)

        })
        .catch(error => {
           console.error('There was an error!', error);
        });

  },[])

  return (
    <div>Scenarios</div>
)}
export default App;