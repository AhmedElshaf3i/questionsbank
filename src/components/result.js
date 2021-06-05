import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearStore } from "../redux/reducers/questions/questionsActions";
import {
  getResult,
  getStudentName,
} from "../redux/reducers/questions/questionsReducer";

const Result = () => {
  const studentName = useSelector(getStudentName);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleTrayAgain = () => {
    dispatch(clearStore());
    history.replace("/enrolQuestions");
  };
  const result = useSelector(getResult);

  return (
    <Card className="text-center w-50 mx-auto mt-5 shadow  ">
      <Card.Header>MCQ App</Card.Header>
      <Card.Body>
        <Card.Title>
          Your score is 
          <span
            className={(result * 100) / 5 > 50 ? " text-success ml-2" : " text-danger ml-2" } >
            {(result * 100) / 5} %
          </span>
        </Card.Title>
        <Card.Text className="">
          <h6>Correct Answers = {result}</h6>
        </Card.Text>
        <Button onClick={handleTrayAgain} variant="primary">
          TryAgain {studentName}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Result;
