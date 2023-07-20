import React from "react";

import Button from "../components/atoms/Button";

export default function Scenario({callBack}) {
  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="flex flex-col justify-center items-center max-w-4xl pb-16 pt-16">
        <div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Scenario
          </h1>
          <p className="mt-6 mb-6 text-xl leading-8 text-gray-700 text-center">
            Ich bitte Sie, die Rolle eines Kunden zu übernehmen, der gerade
            einen Flug von Stuttgart nach New York gebucht hat und nun die
            Buchung abschließen möchte. Hierfür wurden verschiedene Formulare
            erstellt.
            <br />
            <br />
            Ihre Aufgabe besteht darin, jedes Buchungsformular auszufüllen, als
            ob Sie tatsächlich einen Flug buchen würden. Bitte beantworten Sie
            alle Fragen des Formulars.
            <br />
            <br />
            Ziel dieser Studie ist es herauszufinden, welches dieser Formulare
            sich am besten zur Abschluss des Buchungsprozesses eignet.
          </p>
        </div>
        <Button title={"Jetzt starten"} callBack={() => callBack()} />
      </div>
    </div>
  );
}
