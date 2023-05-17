import React from 'react'
import axios from 'axios';
const Response = () => {


    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      document.getElementById('result').textContent = JSON.stringify(response.data);
    })
    .catch(error => {
      console.log(error);
    });

    
  return (
    <div>
<h2 id="result"> </h2>

    </div>
  )
}

export default Response
