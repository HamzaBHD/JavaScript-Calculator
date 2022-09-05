import './Display.css'

export default function Display(props) {
    return (
        <div className='calculator--display'>
            {props.output ? 
            <span id='display' className='output'>{props.output}</span> :
            <span id='display' className='output'>0</span>
            }
            {props.input ? 
            <span id='display' className='input'>{props.input}</span> :
            <span id='display' className='input'>0</span>
            }
        </div> 
    )
}