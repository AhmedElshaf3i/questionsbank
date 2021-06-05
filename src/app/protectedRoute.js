import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getStudentName } from "../redux/reducers/questions/questionsReducer";

const ProtectedRoute = (props) => {
 const studentName = useSelector(getStudentName);
  if (studentName) {
    return <Route {...props} />;
  } else return <Redirect to="/" />;
};

export default ProtectedRoute;
