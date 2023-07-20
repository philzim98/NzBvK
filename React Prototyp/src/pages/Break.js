import React, {useState, useEffect} from "react";

import Button from "../components/atoms/Button";

export default function Break({callBack, sendData, isLast}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(10);

  useEffect(() => {
    setIsDisabled(true);
    const timerId = setInterval(() => {
      setRemainingSeconds(seconds => seconds - 1);
    }, 1000);

    setTimeout(() => {
      setIsDisabled(false);
      clearInterval(timerId); // Beenden des Intervals nach 10 Sekunden
    }, 10000);

    return () => {
      clearInterval(timerId); // Bereinigen des Intervals, wenn die Komponente ausgeblendet wird
    };
  }, []);

  let text = isLast
    ? "Bitte gehen Sie zur anderen Webseite mit den Fragen und füllen Sie den nächsten Fragebogen aus. Anschließend können Sie hier den Nutzertest abschließen"
    : "Bitte gehen Sie zur anderen Webseite mit den Fragen und füllen Sie den nächsten Fragebogen aus. Anschließend können Sie das nächste Formular starten.";

  let buttonTitle = isLast
    ? "Nutzertest abschließen"
    : "Nächstes Formular starten";
  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="flex flex-col justify-center items-center max-w-4xl">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Formular abgeschlossen!
        </h1>
        <p className="mt-6 mb-6 text-xl leading-8 text-gray-700 text-center">
          {text}
        </p>
        <div className="flex flex-row  justify-center w-full">
          <Button
            disabled={isDisabled}
            title={
              remainingSeconds > 0
                ? `${remainingSeconds} Anweisung aus dem Text folgen`
                : buttonTitle
            }
            callBack={() => {
              if (isLast) {
                sendData();
              }
              callBack();
            }}
          />
        </div>
      </div>
    </div>
  );
}
