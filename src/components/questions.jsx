import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Questions({ data, onClick, isOpen }) {
  return (
    <div
      className="border-b border-gray-300 py-4 last:border-b-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between gap-8 items-start text-xl py-5">
        <h1 className="font-medium uppercase">{data.question}</h1>

        <FontAwesomeIcon
          icon={faChevronRight}
          className={`text-sm transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      <p
        className={`
          text-gray-600
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-125 mt-2 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {data.answer}
      </p>
    </div>
  );
}

export default Questions;
