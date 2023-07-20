export default function Endseite({callBack, send, copy}) {
  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col justify-center items-center pl-6 pr-6">
      <div className="flex flex-col justify-center items-center max-w-6xl pb-16 pt-16">
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">
          Herzlichen Dank für Ihre Teilnahme.
        </h1>
        <p className="mt-6 mb-6 text-xl leading-8 text-gray-700 text-center">
          Die Webseiten können nun geschlossen werden.
        </p>
      </div>
    </div>
  );
}
