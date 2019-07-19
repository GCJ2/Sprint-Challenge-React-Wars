import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";

import styled from "styled-components"

export default function PersonGrid(props) {
  console.log('Person Gird', props);
{/*}  const [data, setData] = useState([])
  const [page, setpage] = useState(1)


  useEffect(() => {
  axios.get(`https://swapi.co/api/people/?page=${2}&format=json`)
    .then(response => {
      const data = response.data.results;
      setData(data);
      console.log('data', data);
    });
}, []);

*/}
  return (
    <div className = "imageGridWrapper">
      <div className="imageGrid">
        {props.charData.map((data, index) =>
          <PersonCard
            key={index}
            name={data.name}
            birthYear={data.birth_year}
            gender={data.gender}
            height={data.height}
            weight={data.mass}
        />)}
      </div>
    </div>
  )
}
