import React, {useState, useEffect, useRef} from "react";

import {form, types} from "../data/data";

import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/textForm/TextInput";
import SelectionInput from "../components/atoms/textForm/SelectionInput";

import {MdConnectingAirports} from "react-icons/md";

export default function StandardTextformular({callBack}) {
  const [data, setData] = useState(new Array(form.length).fill(""));
  const [autofillUsed, setAutofillUsed] = useState(false);

  const pageLoadTime = useRef(null); // Ref erzeugen

  const changeData = (value, index) => {
    let tempData = data;
    tempData[index] = value;
    setData([...tempData]);
  };

  useEffect(() => {
    // Bei jeder Änderung von 'index' wird die aktuelle Zeit gespeichert
    pageLoadTime.current = Date.now();
  }, []);

  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-full max-w-5xl pt-8 pb-8">
        <div className="mx-auto sm:col-span-2 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dein Flug
          </h2>
          <div className="flex flex-row justify-between items-center mt-4">
            <p className="text-lg text-gray-600">Stuttgart</p>
            <MdConnectingAirports className="flex h-8 w-8 mr-4 ml-4 text-indigo-600" />
            <p className="text-lg text-gray-600">New York City</p>
          </div>
        </div>

        {}

        {form.map((element, Index) => {
          let component = null;

          if (element.groupName) {
            component = (
              <div className="sm:col-span-2 mt-8">
                <h2
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  {element.groupName}
                </h2>
              </div>
            );
          }

          if (element.elementType === types.text) {
            return (
              <React.Fragment key={Index}>
                {component}
                <TextInput
                  type={element.type}
                  name={element.name}
                  id={element.id}
                  autoComplete={element.autoComplete}
                  label={element.label}
                  isFullWidth={element.isFullWidth}
                  onChange={text => changeData(text, Index)}
                  onAutofillUsed={setAutofillUsed}
                />
              </React.Fragment>
            );
          }

          if (element.elementType === types.selection) {
            return (
              <React.Fragment key={Index}>
                {component}
                <SelectionInput
                  answers={element.answers}
                  name={element.name}
                  id={element.id}
                  label={element.label}
                  onChange={text => changeData(text, Index)}
                />
              </React.Fragment>
            );
          }
          return <></>;
        })}
        <div className="w-full sm:col-span-2 flex items-center justify-center">
          <Button
            title={"Formular abschicken"}
            callBack={() => {
              // Verhindert das weiter machen wenn nicht alle Daten eingetrafen sind
              /*
              let allFieldsFilledOut = data.every(str => str.length > 0);

              if (!allFieldsFilledOut) {
                alert("Bitte füllen Sie alle Felder aus.");
                return;
              }
              */

              let pageUnloadTime = Date.now();
              let spentTimeMillis = pageUnloadTime - pageLoadTime.current; // verbrachte Zeit in Millisekunden

              callBack(data, spentTimeMillis, autofillUsed);
            }}
          />
        </div>
      </div>
    </div>
  );
}
