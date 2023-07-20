import {useState} from "react";

export default function TextInput({
  type,
  name,
  id,
  autoComplete,
  label,
  isFullWidth,
  onChange,
  onAutofillUsed,
}) {
  const FullWidth = isFullWidth ? "sm:col-span-2" : "";

  const [text, setText] = useState("");

  return (
    <div className={FullWidth}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={event => {
            let tempText = text;

            if (event.target.value.length > tempText.length + 4) {
              onAutofillUsed(true);
            }

            onChange(event.target.value);
            setText(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
