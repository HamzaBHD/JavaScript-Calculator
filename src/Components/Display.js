import './Display.css'

export default function Display(props) {
    return (
        <div className='calculator--display'>
            {props.output ? 
            <span className='output'>{props.output}</span> :
            <span className='output'>0</span>
            }
            {props.input ? 
            <span className='input'>{props.input}</span> :
            <span className='input'>0</span>
            }
        </div> 
    )
}