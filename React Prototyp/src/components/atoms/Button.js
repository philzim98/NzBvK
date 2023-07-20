export default function Button({callBack, title, disabled = false}) {
  const buttonClasses = disabled
    ? "rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
    : "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  return (
    <>
      <button
        type="button"
        className={buttonClasses}
        onClick={callBack}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
}
