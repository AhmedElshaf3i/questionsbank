import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addQuestionResult } from "../redux/reducers/questions/questionsActions";
import { getAllQeustions, getStudentName } from "../redux/reducers/questions/questionsReducer";

const QuestionsList = () => {
  const dispatch = useDispatch();
  const studentName = useSelector(getStudentName);
  //   get all questions from gl redux state
  const questions = useSelector(getAllQeustions);
  // track rendering question
  const [currentQuestionNum, setCurrentQuestion] = useState(0);
  const history = useHistory();
  //   student answer
  const [answer, setAnswer] = useState(null);

  //  use checkedState to clear checked value in the next question'choices
  const [checkedState, setCheckedState] = useState(null);

  const handleNextQuestion = () => {
    //   clear current checked value
    setCheckedState(null);
    if (answer == questions[currentQuestionNum].answer) {
      dispatch(addQuestionResult(1));
    }
    setAnswer(null);
    if (currentQuestionNum < questions.length - 1) {
      setCurrentQuestion(currentQuestionNum + 1);
    } else {
      history.replace("/result");
    }
  };

  return (
    <>
      {questions.length == 0 && <div>Back to enrol page .....</div>}
      {
        questions.length !== 0 && (
          <Card className="text-center w-50 mx-auto mt-5 shadow  ">
            <Card.Header>MCQ App</Card.Header>
            <Card.Body>
              <Card.Title className="text-left">{currentQuestionNum +1+". " + questions[currentQuestionNum].header}</Card.Title>
              <Card.Text className="text-left">
                  <ol>
                     {questions[currentQuestionNum].choices.map((choice, i) => (
                       <li key={i}>
                         <input
                           onChange={(e) => {
                             setAnswer(e.target.value);
                             setCheckedState(i);
                           }}
                           type="radio"
                           name="choices"
                           className="mr-2"
                           id={i}
                           checked={checkedState === i ? true : false}
                           value={choice}
                         />
                         {choice}
                       </li>
                     ))}
                   </ol>
              </Card.Text>
              <Button onClick={handleNextQuestion}  disabled={!answer} variant="primary">
                Next
              </Button>
            </Card.Body>
          </Card>
        )
      }
    </>
  );
};

export default QuestionsList;
