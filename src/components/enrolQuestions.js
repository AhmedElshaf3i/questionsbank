import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addQuestions } from "../redux/reducers/questions/questionsActions";
import { getStudentName } from "../redux/reducers/questions/questionsReducer";
const EnrolQuestions = () => {
  const history = useHistory();
  const studentName = useSelector(getStudentName);
  const dispatch = useDispatch();

  let questions = [
    {
      id: "1",
      header: "Process of inserting an element in stack is called ____________",
      choices: ["Create", "Push", "Evaluation", "Pop"],
      answer: "Push",
    },
    {
      id: "2",
      header:
        "In a stack, if a user tries to remove an element from an empty stack it is called _________",
      choices: [
        "Underflow",
        "Empty collection",
        "Overflow",
        " Garbage Collection",
      ],
      answer: "Underflow",
    },
    {
      id: "3",
      header: "What is the value of the postfix expression 6 3 2 4 + – *?",
      choices: [1, 40, 74, -18],
      answer: -18,
    },
    {
      id: "4",
      header:
        " The data structure required to check whether an expression contains a balanced parenthesis is?",
      choices: ["Stack", "Queue", "Array", "Tree"],
      answer: "Stack",
    },
    {
      id: "5",
      header:
        "The method which offers higher speeds of I/O transfers is ___________",
      choices: [
        "Interrupts",
        "Memory mapping",
        "Program-controlled I/O",
        "DMA",
      ],
      answer: "DMA",
    },
  ];
  /**
   * This fun take an arr and turn it to new unique and random arr
   * @param {take an arr switch it to  random arr} arr
   * @param {* range of genrated random num} range
   * @returns new random indexes array
   */
  const random = (arr, range) => {
    let newRandomArr = new Set();
    do {
      newRandomArr.add(arr[Math.floor(Math.random() * range)]);
    } while (newRandomArr.size < arr.length);
    return Array.from(newRandomArr);
  };
  /**
   * call fun random to random questions and it's choices
   */
  const newQuestions = random(questions, 5).map((question) => {
    return { ...question, choices: random(question.choices, 4) };
  });

  // store random Questions to global redux state
  const handleEnrol = () => {
    dispatch(addQuestions(newQuestions));
    history.push("/questions");
  };

  return (
    <Card className="text-center w-50 mx-auto mt-5 shadow  ">
      <Card.Header>MCQ App</Card.Header>
      <Card.Body>
        <Card.Title>Welcome {studentName}</Card.Title>
        <Button onClick={handleEnrol} variant="primary">
          Enrol
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EnrolQuestions;
