import React from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

//NEW FROM ME
import { Component } from "react";
import axios from "axios";
import SurveyDone from "./SurveyDone";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "../Surveys/surveyFraunhofer_json2";

//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "../MyQuestion";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);



class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  onCompleteComponent = () => {
    this.setState({
      isCompleted: true,
    });
  };

  sendDataToServer = (survey) => {
    this.setState({
      isCompleted: true,
    });
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
    // console.log("Survey DATA:" , survey.data);
    // console.log("Survey MAIL:", survey.data.Benutzerdaten.Mail);
    //Daten aus dem Fragebogen wird der EMAIL aus dem Fragebogen zugeordnet
    localStorage.setItem("userEmail", survey.data.Benutzerdaten.Mail);

    axios
      .post("http://localhost:5000/doasurvey", {
        data: survey.data,
        email: survey.data.Benutzerdaten.Mail,
      })
      .then((res) => {
        console.log(res);
        // console.log(res.config.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    var model = new Survey.Model(json);

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        model={model}
        showCompletedPage={false}
        onComplete={this.sendDataToServer}
      />
    ) : null;

    var onSurveyCompletion = this.state.isCompleted ? (
      <div>
        Thank you!!!
        <SurveyDone />
      </div>
    ) : null;

    return (
      <div>
        <div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    );
  }
}

export default Test;
