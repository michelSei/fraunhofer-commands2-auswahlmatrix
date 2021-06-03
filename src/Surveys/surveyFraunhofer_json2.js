export var json = {
  locale: "de",
  title: "Checkliste: Potential für den Einsatz von MRK-Robotik",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "multipletext",
          name: "Benutzerdaten",
          title: "Allgemeine Informationen",
          description: "",
          descriptionLocation: "underInput",
          items: [
            {
              name: "name",
              isRequired: true,
              title: "Name",
            },
            {
              name: "Mail",
              isRequired: true,
              title: "E-Mail",
            },
            {
              name: "ort",
              title: "Ort",
            },
            {
              name: "arbeitsplatz",
              title: "Arbeitsplatz",
            },
          ],
        },
        {
          name: "date",
          type: "datepicker",
          inputType: "date",
          title: "Datum:",
          dateFormat: "dd/mm/yy",
          isRequired: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "prozessdauer",
          title: "Dauer des Prozesses?",
          choices: [
            {
              value: "3",
              text: "≥ 3h",
            },
            {
              value: "2",
              text: "≥ 2h",
            },
            {
              value: "1",
              text: "≥ 1h",
            },
            {
              value: "0",
              text: "<1h",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "wiederholungen",
          title: "Anzahl Wiederholungen des Prozesses?",
          choices: [
            {
              value: "3",
              text: "≥ 500",
            },
            {
              value: "2",
              text: "≥ 100",
            },
            {
              value: "1",
              text: "≥ 10",
            },
            {
              value: "0",
              text: "<10",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "genauigkeit",
          title: "Genauigkeit des Prozesses?",
          choices: [
            {
              value: "3",
              text: "≥ 5mm/m",
            },
            {
              value: "2",
              text: "≥ 1mm/m",
            },
            {
              value: "1",
              text: "≥ 0,1mm/m",
            },
            {
              value: "0",
              text: "<0,1 mm/m",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "handhabungsgewicht",
          title: "Handhabungsgewicht",
          choices: [
            {
              value: "3",
              text: "≤ 1kg",
            },
            {
              value: "2",
              text: "≤ 25%",
            },
            {
              value: "1",
              text: "≤ 50%",
            },
            {
              value: "0",
              text: "> 50%",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "werkzeuge",
          title: "Anzahl Werkzeuge",
          choices: [
            {
              value: "3",
              text: "1",
            },
            {
              value: "2",
              text: "2",
            },
            {
              value: "1",
              text: "3",
            },
            {
              value: "0",
              text: "> 3",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "materialvarianz",
          title: "Materialvarianz in % von Anzahl",
          choices: [
            {
              value: "3",
              text: "≤ 5%",
            },
            {
              value: "2",
              text: "≤ 25%",
            },
            {
              value: "1",
              text: "≤ 50%",
            },
            {
              value: "0",
              text: "> 50%",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "comment",
          name: "question4",
          title:
            "Warum soll eine Automatisierung stattfinden und was sind die Ziele?",
        },
        {
          type: "imagepicker",
          name: "kollaborationGewünschte Kollaboration",
          title: "Gewünschte Kollaboration",
          choices: [
            {
              value: "handführung",
              text: "Handführung",
              imageLink: "https://i.ibb.co/w792Rzx/kollab1.png",
            },
            {
              value: "sicherheitsgerichteter_stopp",
              text: "Sicherheitsgerichteter Stopp",
              imageLink: "https://i.ibb.co/xXtfgSb/kollab2.png",
            },
            {
              value: "geschwindigkeits-_und_abstandsüberwachung",
              text: "Geschwindigkeits- und Abstandsüberwachung",
              imageLink: "https://i.ibb.co/fFkfbXF/kollab3.png",
            },
            {
              value: "leistungs-_und_kraftbegrenzung",
              text: "Leistungs- und Kraftbegrenzung",
              imageLink: "https://i.ibb.co/64S4SyT/kollab4.png",
            },
          ],
          imageFit: "fill",
          showLabel: true,
        },
        {
          type: "checkbox",
          name: "question3",
          title: "Ausgeschlossene Technologien ",
          choices: [
            {
              value: "item1",
              text: "WLAN",
            },
            {
              value: "item2",
              text: "Lithium Akkus",
            },
          ],
          hasOther: true,
        },
        {
          type: "nouislider",
          name: "range",
          title: "Budget-Rahmen in Euro",
          rangeMin: 0,
          rangeMax: 100000,
        },
      ],
      title: "Zielstellung",
    },
    {
      name: "page4",
      elements: [
        {
          type: "radiogroup",
          name: "zugänglichkeit",
          title: "Zugänglichkeit",
          choices: [
            {
              value: "1",
              text: "Ja",
            },
            {
              value: "2",
              text: "Nein",
            },
          ],
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "werkzeuge1",
          visibleIf: "{zugänglichkeit} = 1",
          title: "    Stellfläche vorhanden",
          hideNumber: true,
          choices: [
            {
              value: "1",
              text: "sehr gut",
            },
            {
              value: "2",
              text: "gut",
            },
            {
              value: "3",
              text: "befriedigend",
            },
            {
              value: "4",
              text: "ausreichend",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "werkzeuge2",
          visibleIf: "{zugänglichkeit} = 1",
          title: "    Zugänglichkeit des Arbeitspunktes",
          hideNumber: true,
          choices: [
            {
              value: "1",
              text: "sehr gut",
            },
            {
              value: "2",
              text: "gut",
            },
            {
              value: "3",
              text: "befriedigend",
            },
            {
              value: "4",
              text: "ausreichend",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "radiogroup",
          name: "werkzeuge3",
          visibleIf: "{zugänglichkeit} = 1",
          title: "    Erreichbarkeit des Arbeitsraumes",
          hideNumber: true,
          choices: [
            {
              value: "1",
              text: "sehr gut",
            },
            {
              value: "2",
              text: "gut",
            },
            {
              value: "3",
              text: "befriedigend",
            },
            {
              value: "4",
              text: "ausreichend",
            },
          ],
          hasOther: true,
          otherText: "N/A",
          colCount: 5,
        },
        {
          type: "file",
          name: "bild_arbeitsplatz",
          title: "Fotos des Arbeitsplatzes hochladen",
          imageWidth: 150,
          storeDataAsText: false,
          showPreview: true,
          maxSize: 10240000,
        },
      ],
      title: "Arbeitsplatzbeschreibung",
    },
  ],
};