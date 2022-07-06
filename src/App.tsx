import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {OutputScreen} from "./components/OutputScreen";



function App() {
    let [count, setCount] = useState(0)

    let maxValue = 5

    const onclickIncHandler = () => setCount(++count)
    const onclickResetHandler = () => setCount(0)

    return (
        <div className="App">
            <div className="container">
                <OutputScreen count={count} maxValue={maxValue}/>
                <div className={'buttonSection'}>
                    <Button  name={'Inc'} callBack={onclickIncHandler} disabled={count >= maxValue}/>
                    <Button  name={'Reset'} callBack={onclickResetHandler} disabled={count === 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
