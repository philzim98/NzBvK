import React, {useState, useEffect, useRef} from "react";
import {form, types, special} from "../data/data";

import Button from "../components/atoms/Button";
import Card from "../components/atoms/playfulForm/Card";
import TextInput from "../components/atoms/playfulForm/TextInput";
import Slider from "../components/atoms/playfulForm/Slider";

export default function Playfulnessformular({callBack}) {
  const [index, setIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState(new Array(form.length).fill(""));
  const [numCols, setNumCols] = useState(5);

  const pageLoadTime = useRef(null); // Ref erzeugen

  useEffect(() => {
    pageLoadTime.current = Date.now();

    if (form[index].elementType === types.text) {
      setTimeout(() => {
        const input = document.querySelector("input");
        input.focus();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userAnswered = (next, id) => {
    let pageUnloadTime = Date.now();
    let spentTimeMillis = pageUnloadTime - pageLoadTime.current; // verbrachte Zeit in Millisekunden

    let tempIndex = index;

    let tempAnswers = answers;

    if (id !== undefined) {
      tempAnswers[tempIndex] = id;
    } else {
      tempAnswers[tempIndex] = currentAnswer;
    }

    setAnswers([...tempAnswers]);

    if (next) {
      tempIndex = tempIndex + 1;

      if (form.length - 1 < tempIndex) {
        // Verhindert das weiter machen wenn nicht alle Daten eingetrafen sind
        /*
          let allFieldsFilledOut = data.every(str => str.length > 0);

          if (!allFieldsFilledOut) {
            alert("Bitte füllen Sie alle Felder aus.");
            return;
          }
        */
        callBack(answers, spentTimeMillis);
        return;
      }
    } else {
      tempIndex = tempIndex - 1;

      if (tempIndex < 0) {
        tempIndex = 0;
      }
    }

    const numItems = form[tempIndex].answers.length - 1;

    if (numItems >= 4) {
      setNumCols(4);
    } else {
      setNumCols(numItems);
    }

    setIndex(tempIndex);
    if (answers[tempIndex] !== undefined) {
      setCurrentAnswer(answers[tempIndex]);
    } else {
      setCurrentAnswer("");
    }

    if (form[tempIndex].elementType === types.text) {
      setTimeout(() => {
        const input = document.querySelector("input");
        input.focus();
      }, 100);
    }
  };

  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="bg-white drop-shadow-sm w-full max-w-5xl min-h-[500px] rounded-2xl p-8 flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
            {form[index].questionPlayfulness}
          </h1>
          {/*
            <p className="mt-2 text-xl leading-8 text-gray-700 text-center">
              {form[index].questionPlayfulness}
            </p>
          */}
        </div>
        {form[index].elementType === types.text ? (
          <div className="mr-24 ml-24">
            <TextInput
              text={currentAnswer}
              date={form[index].type === "date"}
              callBack={text => setCurrentAnswer(text)}
              onKeyDown={() => userAnswered(true, undefined)}
            />
          </div>
        ) : (
          <></>
        )}
        {form[index].elementType === types.selection &&
        form[index].special === special.off ? (
          <div className="flex justify-center items-center w-full">
            <div
              className={
                form[index].answers.length <= 10
                  ? `grid ${numCols === 4 ? "grid-cols-4" : ""} ${
                      numCols === 3 ? "grid-cols-3" : ""
                    } ${numCols === 2 ? "grid-cols-2" : ""} ${
                      numCols === 1 ? "grid-cols-1" : ""
                    } gap-0 w-full`
                  : ""
              }
            >
              {form[index].answers.map((element, Index) => {
                if (element.text === "-" || form[index].answers.length >= 10)
                  return null;
                return (
                  <Card
                    key={element.text + Index}
                    text={element.text}
                    Icon={element.icon}
                    multiSelect={form[index].multiSelect}
                    isSelected={currentAnswer === Index}
                    id={Index}
                    callBack={id => setCurrentAnswer(id)}
                    callBackNext={id => userAnswered(true, id)}
                  />
                );
              })}
              {form[index].answers.length >= 10 ? (
                <div className="flex flex-row">
                  <Card
                    text={form[index].answers[1].text}
                    Icon={undefined}
                    multiSelect={false}
                    isSelected={currentAnswer === 1}
                    id={1}
                    callBack={id => setCurrentAnswer(id)}
                    callBackNext={id => userAnswered(true, id)}
                  />
                  <div className="mr-24 ml-24 w-96">
                    <div className="mt-8">
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        Eigene Antwort
                      </label>
                      <TextInput
                        text={currentAnswer}
                        date={false}
                        callBack={text => setCurrentAnswer(text)}
                        onKeyDown={() => userAnswered(true, undefined)}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <></>
        )}
        {form[index].elementType === types.selection &&
        form[index].special === special.slider ? (
          <div className="flex justify-center items-center">
            <div>
              <Slider
                min={36}
                max={48}
                start={currentAnswer !== "" ? currentAnswer : 42}
                onChangeValue={text => setCurrentAnswer(text)}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-row justify-between items-center">
          <Button
            title={"Zurück"}
            callBack={() => userAnswered(false, undefined)}
          />

          <div className="mr-8 ml-8 bg-slate-100 h-2 w-full rounded-lg">
            <div
              className="h-2 bg-indigo-600 rounded-lg"
              style={{width: `${Math.round((index / form.length) * 100)}%`}}
            />
          </div>

          <Button
            title={"Weiter"}
            callBack={() => userAnswered(true, undefined)}
          />
        </div>
      </div>
    </div>
  );
}
