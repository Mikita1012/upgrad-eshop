import { Fragment } from "react";
import '../src/common/Common.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { purple } from "@mui/material/colors";
import '@fontsource/roboto/300.css';

import SignUp from "./components/sign-up/SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/navigationbar/NavigationBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";



function App() {
  return (
    <Fragment>
      {/* <h1>Welcome to ESHOP</h1>
      <DeleteIcon sx={{color: purple[500]}}/> */}
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignUp />
          </Route>
        </Switch>

      </Router>


    </Fragment>
  );
}

export default App;
