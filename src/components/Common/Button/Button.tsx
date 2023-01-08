import type { FC, PropsWithChildren } from 'react';
// import css from './styles.module.css';

interface ButtonProps {
    disabled?: boolean;
    type?: 'alert' | 'submit';
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) =>
    <button /*className={css}*/ onClick={props.onClick} disabled={props.disabled}>{props.children}</button>