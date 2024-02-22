import React, { useState,useEffect }  from "react";
//useEffect
function Scenarios () {



  //const auth=true;
  const [data,setData]= useState('');
  useEffect ( () =>  {
    axios.post('/api/profile')
        .then(response => {
          console.log(response);
          setData(response.data)
          localStorage.setItem('auth',response.data.auth)
        })
        .catch(error => {
           console.error('There was an error!', error);
        });

  },[])

  return (
    <div>Scenarios</div>
)}
export default Scenarios;
