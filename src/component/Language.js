import React from "react";
import LangItem from "./LangItem";
import "../stylingsheets/Language.css";
import img from "../vid_img/language1.jpg"
import {Parallax} from "react-parallax"

export default function Language() {
  const languages = [
    ["HTML", 90],
    ["CSS", 80],
    ["Javascript", 60],
    ["Python", 40],
    ["Java", 30],
    ["C", 70],
    ["C++", 40],
    ["PHP", 25],
    ["Batch", 20],
  ];
  return (
    <Parallax
      blur={{min:2,max:15}}
      bgImage={img}
      bgImageAlt="the cat"
      strength={-600}
      // bgImageStyle={{width:"100vw"}}
    >
      <div className="container_l">
        <p className="head">Languages Known</p>
        {languages.map((lang, idx) => {
          return (
            <LangItem key={idx} langName={lang[0]} langPercent={lang[1]} />
          );
        })}
      </div>
    </Parallax>
  );
}
