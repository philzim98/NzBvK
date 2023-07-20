import React, {useState} from "react";
//import firebase from "firebase/app";

import Button from "../components/atoms/Button";

//http://localhost:3000//?id=123
export default function Startseite({callBack}) {
  const urlParams = new URLSearchParams(window.location.search);
  let userId = urlParams.get("id");

  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="flex flex-col justify-center items-center max-w-4xl pb-16 pt-16">
        <div>
          <h2 className="mt-2 text-2xl font-bold">
            Information zur Studie und zum Datenschutz
          </h2>
          <p className="text-base">
            Sehr geehrte Teilnehmerin, sehr geehrter Teilnehmer,
            <br />
            <br />
            im Kontext meiner Bachelorarbeit führe ich eine Studie durch. Der
            Schwerpunkt liegt auf der Untersuchung verschiedener
            Online-Formulare hinsichtlich ihrer Benutzerfreundlichkeit und ihrer
            Effizienz bei der Datenerhebung.
            <br />
            <br />
            Details zur Studie
          </p>
          <ul className="list-disc list-outside space-y-2">
            <li className="ml-5">
              Diese Studie widmet sich dem Vergleich dreier unterschiedlicher
              Typen von Online-Formularen: ein herkömmliches Textformular, ein
              Chatbot, der Daten innerhalb einer Konversation erhebt, und ein
              sogenanntes Funnel-Formular, welches einen interaktiven Prozess
              zur Datenerhebung bietet.
            </li>
            <li className="ml-5">
              Der Fokus liegt auf der Beurteilung und dem Vergleich dieser
              Formulare hinsichtlich ihrer Benutzerfreundlichkeit und Effizienz.
              Die Studie wird pro Teilnehmer etwa 40 Minuten in Anspruch nehmen.
            </li>
            <li className="ml-5">
              Im Verlauf der Studie werden Sie gebeten, mehrere Fragebögen
              auszufüllen und verschiedene Aufgaben mit den bereitgestellten
              Online-Formularen durchzuführen.
            </li>
          </ul>
          <p className="text-base">
            <br />
            Sie haben die Möglichkeit, die Studie jederzeit und ohne Angabe von
            Gründen zu unterbrechen oder vollständig abzubrechen. Im Falle eines
            Abbruchs haben Sie das Recht zu entscheiden, ob die bereits
            erhobenen Daten gelöscht oder weiterhin genutzt werden dürfen.
            <br />
            <br />
            Im Rahmen dieser wissenschaftlichen Untersuchung erheben wir
            folgende Daten: Ihre Altersgruppe wird erfragt, wobei anstelle einer
            exakten Altersangabe die Auswahl aus einer zuvor definierten Liste
            von Altersgruppen geboten wird. Diese Methode ermöglicht uns,
            grundlegende demografische Informationen für unsere Studie zu
            erheben, ohne detaillierte Altersangaben zu erfassen und so Ihre
            Privatsphäre zu wahren. Zusätzlich erheben wir weitere
            Informationen, wie Ihr bevorzugtes Betriebssystem, bisherige
            Erfahrungen mit Online-Formularen und Ihre Zufriedenheit durch einen
            Fragebogen. Für das Ausfüllen der Formulare im Rahmen der Studie
            werden persönliche Daten wie Vorname, Nachname, Geschlecht,
            Nationalität, E-Mail-Adresse und Geburtsdatum abgefragt. Zum Schutz
            Ihrer Privatsphäre werden Ihre Eingaben unkenntlich gemacht und alle
            Buchstaben und Zahlen durch Sterne ersetzt. Beispiel: Wenn Sie den
            Nachnamen Mustermann eintragen, wird daraus **********. Die Daten
            werden anschließend auf einer Firebase Datenbank innerhalb der
            Europäischen Union gespeichert. Dies gewährleistet ein hohes
            Datenschutzniveau, da die Datenverarbeitung in Übereinstimmung mit
            den strengen Datenschutzgesetzen der Europäischen Union erfolgt.
            Alle erhobenen Daten werden streng vertraulich behandelt und in
            anonymisierter Form für statistische Analysen verwendet.
          </p>
          <div className="overflow-hidden p-4">
            <label className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <p className="text-base">
                  Über die Ziele der Studie und meine Aufgaben bei der
                  Untersuchung wurde ich informiert. Ich erkläre meine
                  freiwillige Teilnahme an der Studie und erkläre mich
                  insbesondere mit der Verwendung der im Rahmen der Studie
                  “Nutzerstudie zur Benutzerfreundlichkeit von Onlineformularen”
                  erhobenen Daten in der oben beschriebenen Weise einverstanden.
                </p>
              </div>
            </label>
          </div>
        </div>
        <Button
          disabled={!checked}
          title={"Jetzt starten"}
          callBack={() => callBack(userId)}
        />
      </div>
    </div>
  );
}
