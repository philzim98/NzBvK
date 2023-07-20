import Button from "../components/atoms/Button";
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

export default function ErsteFragen({callBack}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="flex flex-col justify-center items-center max-w-4xl">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Erfahrungen und persönliche Informationen
        </h1>
        <p className="mt-6 mb-6 text-xl leading-8 text-center text-gray-700">
          Bitte klicken Sie auf den untenstehenden Link und beantworten Sie den
          ersten Fragebogen 'Erfahrungen und persönliche Informationen'. Es ist
          wichtig, die Seite nicht zu schließen, da in Kürze weitere Fragebögen
          folgen werden.
          <br />
          <br />
          <strong>Der Zugangscode befindet sich in der Mail</strong>
          <br />
          <br />
          <a
            href="https://survey.hdm-stuttgart.de/862183?newtest=Y&lang=de"
            className="text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://survey.hdm-stuttgart.de/862183?newtest=Y&lang=de
          </a>
        </p>

        <div className="flex flex-row  justify-center w-full">
          <Button
            title={"Mit dem ersten Formular beginnen"}
            callBack={() => setOpen(true)}
          />
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Letzte Informationen
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          In den folgenden Formularen werden Reisepassdaten
                          abgefragt. Die entsprechenden Informationen können aus
                          dem Reisepass im Anhang der E-Mail entnommen werden.
                          Für alle weiteren Angaben bitte genauso vorgehen, als
                          ob es sich um eine echte Buchung handeln würde.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => {
                        callBack();
                        setOpen(false);
                      }}
                    >
                      Weiter
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
