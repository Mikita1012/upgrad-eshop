import { Fragment } from "react";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/signin/SignIn";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Products from "./components/ProductsPage/Products";


function App() {
  let isLoggedIn;

  async function createUserHandler(newUser) {
    try {
    const rawResponse = await fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    // const data  = await rawResponse.json();
    // loadData();

    if (!rawResponse.ok) {
      throw new Error('Failed to create user. Server responded with status ' + rawResponse.status);
    }

    // Handle success response here if needed
    // const data = await rawResponse.json();
    // console.log(data);
  } catch (error) {
    console.error('Error creating user:', error.message);
    // Handle error, display error message to user, log error, etc.
  }
  }

  return (
    <Fragment>
      <Router>
        <Routes>

          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route exact path="/signin" element={<SignIn></SignIn>} />
          <Route exact path="/signup" element={<SignUp createUserHandler={(newUser) => createUserHandler(newUser)}/>}/>
          <Route exact path="/products" element={<Products/>}/>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>


    </Fragment>
  );
}


export default App;
