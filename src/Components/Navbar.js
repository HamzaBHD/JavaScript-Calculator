import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='main--navbar'>
            <i className="bi bi-calculator-fill icon--logo"></i>   
            <div className='text--logo'>
                <h6>JAVASCRIPT CALCULATOR</h6>
                <p>Feel free to calculate</p>
            </div>
        </nav>
    )
}