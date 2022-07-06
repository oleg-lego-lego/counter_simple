import React from 'react';
import '../App.css';


type OutputScreenPropsType = {
    count: number
    maxValue: number
}

export const OutputScreen = (props: OutputScreenPropsType) => {
    return (
        <div className={props.count === props.maxValue ? 'error' : 'outputScreen'}>
            <h1>{props.count}</h1>
        </div>
    );
};
