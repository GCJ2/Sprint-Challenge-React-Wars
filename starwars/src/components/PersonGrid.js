import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import PlanetCard from "./PlanetCard";
import FilmCard from "./FilmCard";
import axios from "axios";

import styled from "styled-components"



export default function PersonGrid(props) {
  console.log(props);

  if (props.content === "people") {
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
  } else if (props.content === "planets") {
    return (
      <div className = "imageGridWrapper">
        <div className="imageGrid">
          {props.charData.map((data, index) =>
            <PlanetCard
              key={index}
              name={data.name}
              rotationPeriod={data.rotation_period}
              climate={data.climate}
              population={data.population}
              terrain={data.terrain}
            />)}
          </div>
        </div>
      )
  } else if (props.content === "films") {
      return (
        <div className = "imageGridWrapper">
          <div className="imageGrid">
            {props.charData.map((data, index) =>
              <FilmCard
                key={index}
                title={data.title}
                director={data.director}
                releaseDate={data.release_date}
                producer={data.producer}
                opening={data.opening_crawl}
              />)}
            </div>
          </div>
        )
    }
}
