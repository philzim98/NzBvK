import React, {useState, useEffect} from "react";

import {form} from "../../data/data";
import {app} from "../../App";
import {getDatabase, ref, set} from "firebase/database";

import Startseite from "../../pages/Startseite";
import StandardTextformular from "../../pages/StandardTextformular";
import Chatbotformular from "../../pages/Chatbotformular";
import Playfulnessformular from "../../pages/Playfulnessformular";
import Endseite from "../../pages/Endseite";
import Scenario from "../../pages/Scenario";
import Break from "../../pages/Break";
import ErsteFragen from "../../pages/ErsteFragen";

import Layout from "./Layout";

const PagePicker = ({sendEmailto, isDone}) => {
  const [numbers, setNumbers] = useState([]);

  const [index, setIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(-1);

  const [probandenID, setProbandenID] = useState("");

  const [StandardTextformularData, setStandardTextformularData] = useState([]);
  const [ChatbotformularData, setChatbotformularData] = useState([]);
  const [PlayfulnessformularData, setPlayfulnessformularData] = useState([]);

  const [StandardTextformularTime, setStandardTextformularTime] = useState(0);
  const [ChatbotformularTime, setChatbotformularTime] = useState(0);
  const [PlayfulnessformularTime, setPlayfulnessformularTime] = useState(0);

  const [isAutofillUsed, setAutofillUsed] = useState(false);

  let db = null;

  if (app) {
    db = getDatabase(app);
  }

  const convertToCSV = (data, title) => {
    const headerRow = "Frage,Antwort";
    const titleRow = title;

    const csvRows = data.map(row => {
      const {frage, antwort} = row;
      return `"${frage}","${antwort}"`;
    });

    return [titleRow, headerRow, ...csvRows, "\n\n"].join("\n");
  };

  const formatData = () => {
    if (
      form.length !== StandardTextformularData.length ||
      form.length !== ChatbotformularData.length ||
      form.length !== PlayfulnessformularData.length
    )
      return;

    let StandardTextformularCSV = [];
    let ChatbotformularDataCSV = [];
    let PlayfulnessformularDataCSV = [];

    form.forEach((data, Index) => {
      StandardTextformularCSV.push({
        frage: data.label,
        antwort: StandardTextformularData[Index].toString().replace(/./g, "*"),
      });
      ChatbotformularDataCSV.push({
        frage: data.label,
        antwort: ChatbotformularData[Index].toString().replace(/./g, "*"),
      });
      PlayfulnessformularDataCSV.push({
        frage: data.label,
        antwort: PlayfulnessformularData[Index].toString().replace(/./g, "*"),
      });
    });

    const dataCSV1 = convertToCSV(
      StandardTextformularCSV,
      "StandardTextformular"
    );
    const dataCSV2 = convertToCSV(ChatbotformularDataCSV, "Chatbotformular");
    const dataCSV3 = convertToCSV(
      PlayfulnessformularDataCSV,
      "Playfulnessformular"
    );

    let csvString = `${probandenID}\n\nStandardTextformular,Chatbotformular,Playfulnessformular\n${StandardTextformularTime},${ChatbotformularTime},${PlayfulnessformularTime}\n\n${dataCSV1}\n${dataCSV2}\n${dataCSV3}\nautofill,${isAutofillUsed}\n\n${numbers}`;

    return csvString;
  };

  const sendData = () => {
    if (db === null) {
      isDone();
      return;
    }

    let data = formatData().replace(/[\r\n]/g, "%0D%0A");

    set(ref(db, "user/" + probandenID), data)
      .then(() => {
        isDone();
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Speichern der Daten: ", error);
      });
  };

  const sendEmail = () => {
    let emailBody = formatData().replace(/[\r\n]/g, "%0D%0A");

    let mailtoLink = `mailto:pz016@hdm-stuttgart.de?subject=CSV Daten ${probandenID}&body=${emailBody}`;

    sendEmailto(mailtoLink);
  };

  const copyToClipboard = () => {
    let emailBody = formatData();

    navigator.clipboard.writeText(emailBody).then(
      function () {
        console.log("Kopieren in die Zwischenablage erfolgreich!");
      },
      function (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
      }
    );
  };
  useEffect(() => {
    let newNumbers = [1, 2, 3];

    for (let i = newNumbers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newNumbers[i];
      newNumbers[i] = newNumbers[j];
      newNumbers[j] = temp;
    }

    setNumbers(newNumbers);
  }, []);

  useEffect(() => {
    if (randomIndex === -1) {
      setIndex(0);
    } else if (randomIndex >= numbers.length) {
      setIndex(4);
    } else {
      setIndex(numbers[randomIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomIndex]);

  if (numbers.length === 0) return null;

  switch (index) {
    case 0:
      return (
        <Startseite
          callBack={probandenID => {
            setProbandenID(probandenID);
            setIndex(6);
          }}
        />
      );
    case 6:
      return (
        <Scenario
          callBack={() => {
            setIndex(7);
          }}
        />
      );
    case 7:
      return (
        <ErsteFragen
          callBack={() => {
            setIndex(numbers[0]);
          }}
        />
      );
    case 1:
      return (
        <Layout>
          <StandardTextformular
            callBack={(data, spentTimeMillis, autofillUsed) => {
              setStandardTextformularTime(spentTimeMillis);
              setAutofillUsed(autofillUsed);
              setStandardTextformularData([...data]);
              setIndex(5);
            }}
          />
        </Layout>
      );
    case 2:
      return (
        <Layout>
          <Chatbotformular
            callBack={(data, spentTimeMillis) => {
              setChatbotformularTime(spentTimeMillis);
              setChatbotformularData([...data]);
              setIndex(5);
            }}
          />
        </Layout>
      );
    case 3:
      return (
        <Layout>
          <Playfulnessformular
            callBack={(data, spentTimeMillis) => {
              setPlayfulnessformularTime(spentTimeMillis);
              setPlayfulnessformularData([...data]);
              setIndex(5);
            }}
          />
        </Layout>
      );
    case 4:
      return (
        <Endseite
          callBack={id => setIndex(id)}
          send={sendEmail}
          copy={copyToClipboard}
        />
      );
    case 5:
      let isLast =
        StandardTextformularData.length !== 0 &&
        ChatbotformularData.length !== 0 &&
        PlayfulnessformularData.length !== 0;
      return (
        <Break
          isLast={isLast}
          sendData={sendData}
          callBack={() => {
            if (randomIndex === -1) {
              setRandomIndex(1);
              return;
            }

            let tempRandomIndex = randomIndex;
            tempRandomIndex = tempRandomIndex + 1;
            setRandomIndex(tempRandomIndex);
          }}
        />
      );
    default:
      return <></>;
  }
};

export default PagePicker;
