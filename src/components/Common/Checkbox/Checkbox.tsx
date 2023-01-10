import { FC } from 'react';

interface CheckboxProps {
    checked: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    return <input type="checkbox" checked={props.checked} />
}