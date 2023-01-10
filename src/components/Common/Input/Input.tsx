import { FC } from 'react';

interface InputProps {
    value: string;
    placeholder: string;
}

export const Input: FC<InputProps> = (props) => {

    return <input value={props.value} placeholder={props.placeholder} />
}