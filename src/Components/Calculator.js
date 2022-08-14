import './Calculator.css'

export default function(props) {
    return (
            <div className='buttons'>
                <button id='reset' className='item' onClick={props.handleReset}>AC</button>
                <button id='del' className='item' onClick={props.handleDelete}>DEL</button>
                <button id='divide' className='item' onClick={() => props.handleNumber('/')}>/</button>
                <button id='multiple' className='item' onClick={() => props.handleNumber('*')}>*</button>
                <button id='equal' className='item' onClick={props.handleCheck}>=</button>
                <button id='add' className='item' onClick={() => props.handleNumber('+')}>+</button>
                <button id='subtract' className='item' onClick={() => props.handleNumber('-')}>-</button>
                <button id='num7' className='item' onClick={() => props.handleNumber('7')}>7</button>
                <button id='num8' className='item' onClick={() => props.handleNumber('8')}>8</button>
                <button id='num9' className='item' onClick={() => props.handleNumber('9')}>9</button>
                <button id='num4' className='item' onClick={() => props.handleNumber('4')}>4</button>
                <button id='num5' className='item' onClick={() => props.handleNumber('5')}>5</button>
                <button id='num6' className='item' onClick={() => props.handleNumber('6')}>6</button>
                <button id='num1' className='item' onClick={() => props.handleNumber('1')}>1</button>
                <button id='num2' className='item' onClick={() => props.handleNumber('2')}>2</button>
                <button id='num3' className='item' onClick={() => props.handleNumber('3')}>3</button>
                <button id='num0' className='item' onClick={() => props.handleNumber('0')}>0</button>
                <button id='point' className='item' onClick={() => props.handleNumber('.')}>.</button>
            </div>
    )
}