import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addStudentName } from "../redux/reducers/questions/questionsActions";
const Login = () => {
  const [studentName, setStudentName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(addStudentName(studentName));
    history.push("/enrolQuestions");
  };
  return (
    <Card className="text-center w-50 mx-auto mt-5 shadow  ">
      <Card.Header>Welcome in MCQ App</Card.Header>
      <Card.Body>
        <Card.Title>
          Please Enter Your name
          <div className="form-group w-50 mt-2 mx-auto">
            <input
              required
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </Card.Title>
        <Button onClick={handleNext} variant="primary">
          Next
        </Button>
      </Card.Body>
    </Card>

    // </div>
  );
};

export default Login;
