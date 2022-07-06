import React from 'react';
import '../App.css';


type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.disabled ? 'disabled' : 'button'} disabled={props.disabled} onClick={onClickButtonHandler}>{props.name}</button>
    );
};

