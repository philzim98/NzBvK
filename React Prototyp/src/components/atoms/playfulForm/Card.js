function Index({
  text,
  Icon,
  isSelected,
  multiSelect,
  id,
  callBack,
  callBackNext,
}) {
  return (
    <div className="flex flex-col items-center pt-2 pb-2">
      <div
        onClick={() => {
          if (multiSelect) {
            callBack(id);
          } else {
            callBackNext(id);
          }
        }}
        className="w-48 h-32 flex justify-center items-center cursor-pointer"
      >
        <div
          className={`flex justify-center items-center w-40 h-28 hover:w-44 hover:h-32 shadow-none shadow-indigo-900 hover:shadow-xl rounded-lg ${
            isSelected
              ? "bg-indigo-200 border-4 border-indigo-600"
              : "bg-indigo-100"
          }`}
        >
          {Icon === undefined ? (
            <p className="text-xl leading-8 text-gray-700 text-center mt-2 pl-4 pr-4">
              {text}
            </p>
          ) : (
            <Icon className="flex h-16 w-16 text-indigo-600" />
          )}
        </div>
      </div>
      {Icon === undefined || text === "" ? null : (
        <p className="text-xl leading-8 text-gray-700 text-center mt-2 pl-4 pr-4 max-w-[200px]">
          {text}
        </p>
      )}
    </div>
  );
}

export default Index;
