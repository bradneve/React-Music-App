import React from "react";
import { useParams } from 'react-router-dom'

export function Album() {

    const params = useParams()

  return (
    <div className="content">
        <h1>{params.person}</h1>
    </div>
    
  );
}