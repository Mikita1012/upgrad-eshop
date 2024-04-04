import { Fragment } from "react";
import '../src/common/Common.css'
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/signin/SignIn";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <Fragment>
      {/* <h1>Welcome to ESHOP</h1>
      <DeleteIcon sx={{color: purple[500]}}/> */}
      <Router>
        <Routes>
          <Route exact path="/signup" Component = {SignUp} />
          <Route exact path="/" Component={LandingPage} />
          <Route exact path="/signin" Component={SignIn} />
        </Routes>

      </Router>


    </Fragment>
  );
}


export default App;
