import React from "react";
import {useParams} from 'react-router-dom'

function Userdetails() {
    const {userId} =useParams()
    // const userId=para.userId
  return (
    <div>
      <h3>this is users details {userId}</h3>
    </div>
  );
}

export default Userdetails;
