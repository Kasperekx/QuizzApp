import React from "react";
//Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

//Types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuesitons: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuesitons,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuesitons}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="wrapper">
        {answers.map((answer, index) => (
          <ButtonWrapper
            key={index}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
