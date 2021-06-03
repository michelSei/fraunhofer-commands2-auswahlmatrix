import bild1 from "./../pictures/kollab1.PNG";

export var json = {
  locale: "de",
  title: "Checkliste: Potential für den Einsatz von MRK-Robotik",
  description: "Untertitel",
  pages: [
    {
      name: "page0",
      title: "TEST123",
      elements: [
        {
          type: "multipletext",
          name: "Benutzerdaten",
          title: "Allgemeine Informationen",
          items: [
            {
              name: "Ort",
            },
            {
              name: "Datum",
            },
            {
              name: "Arbeitsplatz",
            },
            {
              name: "Kontakt",
            },
            {
              name: "Bearbeiter",
              //   isRequired: true,
            },
            {
              name: "Mail",
              inputType: "email",
              //   isRequired: true,
              validators: [
                {
                  type: "email",
                },
              ],
            },
          ],
        },
        {
          type: "datepicker",
          name: "question1",
        },
      ],
    },

    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "prozessdauer",
          title: "Dauer des Prozesses?",
          hasOther: true,
          choices: [
            {
              value: "1",
              text: "≥ 3h",
            },
            {
              value: "2",
              text: "≥ 2h",
            },
            {
              value: "3",
              text: "≥ 1h",
            },
            {
              value: "4",
              text: "<1h",
            },
          ],
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "wiederholungen",
          title: "Anzahl Wiederholungen des Prozesses?",
          hasOther: true,
          choices: [
            {
              value: "1",
              text: "≥ 500",
            },
            {
              value: "2",
              text: "≥ 100",
            },
            {
              value: "3",
              text: "≥ 10",
            },
            {
              value: "4",
              text: "<10",
            },
          ],
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "Genauigkeit",
          title: "Genauigkeit des Prozesses?",
          hasOther: true,
          choices: [
            {
              value: "1",
              text: "≥ 5mm/m",
            },
            {
              value: "2",
              text: "≥ 1mm/m",
            },
            {
              value: "3",
              text: "≥ 0,1mm/m",
            },
            {
              value: "4",
              text: "<0,1 mm/m",
            },
          ],
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with the Product?",
          mininumRateDescription: "Not Satisfied",
          maximumRateDescription: "Completely satisfied",
        },
        {
          type: "rating",
          name: "recommend friends",
          visibleIf: "{Genauigkeit} > 3",
          title:
            "How likely are you to recommend the Product to a friend or co-worker?",
          mininumRateDescription: "Will not recommend",
          maximumRateDescription: "I will recommend",
        },
        {
          type: "imagepicker",
          name: "Gewünschte Kollaboration",
          choices: [
            {
              value: "kollab1",
              imageLink: "https://i.ibb.co/w792Rzx/kollab1.png",
            },
            {
              value: "giraffe",
              imageLink: "https://i.ibb.co/xXtfgSb/kollab2.png",
            },
            {
              value: "panda",
              imageLink: "https://i.ibb.co/fFkfbXF/kollab3.png",
            },
            {
              value: "camel",
              imageLink: "https://i.ibb.co/64S4SyT/kollab4.png",
            },
          ],
        },
      ],
    },

    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "Handhabungsgewicht",
          title: "Handhabungsgewicht?",
          hasOther: true,
          choices: [
            {
              value: "1",
              text: "≤ 1kg",
            },
            {
              value: "2",
              text: "≤ 5kg",
            },
            {
              value: "3",
              text: "≤ 10kg",
            },
            {
              value: "4",
              text: "> 10kg",
            },
          ],
          otherText: "N/A",
          colCount: 5,
        },
      ],
    },
  ],
};
