import React, { useState } from 'react';

const AddText = () => {
    const [inputValue, setInputValue] = useState('');
    const [textArray, setTextArray] = useState([]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleButtonClick = () => {
        if (inputValue) {
            setTextArray([...textArray, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="Todo">
            <h1>My To-Do List</h1>
            <div className="Top">
                <input className="input" type="text" value={inputValue} onChange={handleInputChange} />
                <button className="btn" onClick={handleButtonClick}>ADD</button>
            </div>
            <ul>
                {textArray.map((text, index) => (
                    <li className="task" key={index}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddText;