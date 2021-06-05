import { Link } from "react-router-dom"

const NotFound = () => {
  return (
   
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Error 404</h1>
          <p class="lead">
              Page notFound
          </p>
          <Link to='/'>Back To home</Link>
        </div>
      </div>
   
  );
};

export default NotFound;
