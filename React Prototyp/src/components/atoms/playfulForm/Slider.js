import React, {useState} from "react";

const Slider = ({start, min, max, onChangeValue}) => {
  const [sliderValue, setSliderValue] = useState(start);

  const handleSliderChange = event => {
    onChangeValue(event.target.value);
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <input
        className="min-w-[500px] text-indigo-600 bg-gray-300 outline-none cursor-pointer"
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p className="mt-6 text-xl leading-8 text-gray-700 text-center">
        Größe: {sliderValue}
      </p>
    </div>
  );
};

export default Slider;
