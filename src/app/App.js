import { Redirect, Route, Switch } from 'react-router-dom';
import EnrolQuestions from "../components/enrolQuestions";
import Login from '../components/login'
import NotFound from '../components/notFound';
import QuestionsList from "../components/questionsList";
import Result from "../components/result";
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact component={Login} />
      <ProtectedRoute path='/enrolQuestions' component={EnrolQuestions} />
      <ProtectedRoute path='/questions' component={QuestionsList} />
      <ProtectedRoute path='/result' component={Result} />
      <Route path="/notFound" component={NotFound}/>
      <Redirect from="*"  to= "/notFound"/> 
      </Switch>
    </div>
  );
}

export default App;
