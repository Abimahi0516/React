import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LoginForm from "./Components/Task1.jsx";
import StudentDetails from "./Components/Task2.jsx";
import CourseSelection from "./Components/Task3.jsx";
import TermsConditions from "./Components/Task4.jsx";
import RegistrationForm from "./Components/Task5.jsx";

function App() {
  return (

    <div>

      <h1> React </h1>

      <hr />
      <LoginForm />

      <hr />
      <StudentDetails />

      <hr />
      <CourseSelection />

      <hr />
      <TermsConditions />

      <hr />
      <RegistrationForm />

    </div>

  );
}

export default App;


