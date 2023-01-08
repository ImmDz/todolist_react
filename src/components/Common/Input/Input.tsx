import { FC } from 'react';

interface inputProps {
    type: 'checkbox' | 'text';
    checked?: boolean;
    value?: string;
    placeholder?: string;
}

export const Input: FC<inputProps> = (props) => {
    if(props.type === 'text') {
        return <input type="text" value={ props.value} placeholder={props.placeholder}></input>
    }
    return <input type="checkbox" checked={props.checked}></input>
}