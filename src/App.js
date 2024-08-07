import logo from './logo.svg';
import './App.css';
import ModulariseFromikForm from './form/FormikForm';
import Navbar from './navbar/navbar';
import FormWithFormik from './form/formwithFromik';
import FormWithFormikYup from './form/formWithYupFormik';
import ReactHookForm from './form/reactHookForm';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import {AllUserProvider} from './context/allUserContext';

function App() {
  return (

    <div className="App">
          <Router>
          <div className='header'>
              <Navbar/>
          </div>
          <AllUserProvider>
          <div className='main'>
            <Routes>
              <Route path="/" element={<ModulariseFromikForm/>} />
              <Route path="/formWithFormik" element={<FormWithFormik/>} /> 
              <Route path="/formWithFormikYup" element={<FormWithFormikYup/>} />   
              <Route path="/signup-react-hook-form" element={<ReactHookForm/>} />  
            </Routes>
          </div>
          </AllUserProvider>
          </Router>
     

  </div>
  );
}

export default App;
