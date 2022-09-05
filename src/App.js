import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Display from './Components/Display';
import Calculator from './Components/Calculator'
import Footer from './Components/Footer';

function App() {
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')
 
  const operators = ['*', '+', '-', '/']
  const decimal = '.'

  const handleNumber = (value) => {
    if(operators.includes(value) && number === '' ||
       operators.includes(value) && operators.includes(number.slice(-1)) ||
       number.startsWith('0')) {
      return;
    } else {
      setNumber(number + value)
    }

    if(!operators.includes(value)){
      setResult(eval(number + value))
    }
  }

  const handleReset = () => {
    setNumber('')
    setResult('')
  }

  const handleCheck = () => {
    setNumber(eval(number).toString())
  }

  const handleDelete = () => {
    const newValue = number.slice(0, -1)
    if(number === ''){
      return 
    }
    setNumber(newValue)
  }



  return (
    <div className='main'>
        <div className='main--container'>
          <div className='display'>
            <Display 
              input={number}
              output={result}
            /> 
            <Calculator 
              handleNumber={handleNumber}
              handleReset={handleReset}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          </div>
        <Footer />
        </div>
    </div>
  );
}

export default App;
