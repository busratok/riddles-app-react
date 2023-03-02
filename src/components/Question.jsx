import { useState } from "react";
import { arrowup, arrowdown } from "../helper/icons";
import Card from "./Card";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <Card
          id={id}
          question={question}
          answer={answer}
          icon={arrowup}
          handleToggle={handleToggle}
        />
      ) : (
        <Card
          id={id}
          question={question}
          answer={false}
          icon={arrowdown}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default Question;
