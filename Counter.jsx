import React, {useState} from 'react';
import './style.css';
import crying from './crying.jpg';

function Counter(){
    const [value, setValue] = useState(0);

    const handleAdd = () => {
        setValue(value + 1)
    }

    const handleSubstract = () => {
        setValue(value - 1)
    }

    const handleReset = () => {
        setValue(0)
    }

    return(
        <>
        <div className='container'>
            <div className='cardboard'>
                <div className='title'>
                    <h1>Counter</h1>
                </div>
                <div className='counter-value'>
                    <h2>{value}</h2>
                </div>
                <div className='button-container'>
                    <button className='buttons' onClick={handleSubstract}>Decrement</button>
                    <button className='buttons' onClick={handleReset}>Reset</button>
                    <button className='buttons' onClick={handleAdd}>Increment</button>
                </div>
                <div className='image'>
                    <img className='picture' src={crying} alt="Crying" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Counter