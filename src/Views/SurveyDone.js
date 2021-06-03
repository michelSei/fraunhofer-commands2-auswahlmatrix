// src/views/profile.js

import React, { useState, useEffect } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from "axios";

const SurveyDone = () => {
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      let localStorageEmail = localStorage.getItem("userEmail");
      // console.log("USER EMAIL IS:", localStorage.getItem("userEmail"));
      axios
        .get(`http://localhost:5000/${localStorageEmail}/surveys`)
        .then((res) => {
          // console.log(res);
          setSurvey(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchItems();
  }, []);

  //ALTES TURN:
  // return (
  //   <div>
  //     <h1>Das sind die ausgewerteten Daten</h1>
  //    {survey.map((individualSurvey, index) => {
  //      console.log("Das ist der Survey: ", survey);
  //      console.log("Das sind die Daten:", individualSurvey);
  //      console.log("Das ist die Prozessdauer:", individualSurvey.prozessdauer);
  //      console.log(index);
  //      return (
  //        <ul key={index}>
  //          {/* HIER DIE DATEN EINGEBEN DIE ANGEZEIGT WERDEN */}
  //          <li>{JSON.stringify(individualSurvey)}</li>
  //          {/* <li>Die Prozessdauer ist: {individualSurvey.prozessdauer}</li> */}
  //          {/* <li>{individualSurvey}</li> */}
  //        </ul>
  //      );
  //    })}

  //   </div>
  // );

  return (
    <div>
      <h1>Das sind die ausgewerteten Daten</h1>
      {survey.map((individualSurvey, index) => {
        console.log("Das ist der Survey: ", survey);
        console.log("Das sind die Daten:", individualSurvey);
        console.log("Das ist die Prozessdauer:", individualSurvey.prozessdauer);
        console.log(index);
        return (
          <ul key={index}>
            {individualSurvey.prozessdauer +
              individualSurvey.genauigkeit +
              individualSurvey.handhabungsgewicht +
              individualSurvey.werkzeuge ==
              0 && <li>Der Spass lohnt sich nicht</li>}
            {individualSurvey.prozessdauer == 1 ? (
              <li>Prozessdauer Top</li>
            ) : null}
            {individualSurvey.genauigkeit == 1 ? (
              <li>genauigkeit Top</li>
            ) : null}
          </ul>

          // <ul key={index}>
          //   {/* HIER DIE DATEN EINGEBEN DIE ANGEZEIGT WERDEN */}
          //   <li>{JSON.stringify(individualSurvey)}</li>

          //   {/* <li>Die Prozessdauer ist: {individualSurvey.prozessdauer}</li> */}
          //   {/* <li>{individualSurvey}</li> */}
          // </ul>
        );
      })}
    </div>
  );
};

export default SurveyDone;
