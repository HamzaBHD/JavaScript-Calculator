import './Calculator.css'

export default function(props) {
    return (
            <div className='buttons'>
                <button id='clear' className='item' onClick={props.handleReset}>AC</button>
                <button id='delete' className='item' onClick={props.handleDelete}>DEL</button>
                <button id='divide' className='item' onClick={() => props.handleNumber('/')}>/</button>
                <button id='multiply' className='item' onClick={() => props.handleNumber('*')}>*</button>
                <button id='equals' className='item' onClick={props.handleCheck}>=</button>
                <button id='add' className='item' onClick={() => props.handleNumber('+')}>+</button>
                <button id='subtract' className='item' onClick={() => props.handleNumber('-')}>-</button>
                <button id='seven' className='item' onClick={() => props.handleNumber('7')}>7</button>
                <button id='eight' className='item' onClick={() => props.handleNumber('8')}>8</button>
                <button id='nine' className='item' onClick={() => props.handleNumber('9')}>9</button>
                <button id='four' className='item' onClick={() => props.handleNumber('4')}>4</button>
                <button id='five' className='item' onClick={() => props.handleNumber('5')}>5</button>
                <button id='six' className='item' onClick={() => props.handleNumber('6')}>6</button>
                <button id='one' className='item' onClick={() => props.handleNumber('1')}>1</button>
                <button id='two' className='item' onClick={() => props.handleNumber('2')}>2</button>
                <button id='three' className='item' onClick={() => props.handleNumber('3')}>3</button>
                <button id='zero' className='item' onClick={() => props.handleNumber('0')}>0</button>
                <button id='decimal' className='item' onClick={() => props.handleNumber('.')}>.</button>
            </div>
    )
}