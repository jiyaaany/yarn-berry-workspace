import React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare function Button({ children, ...props }: Props): React.JSX.Element;
export default Button;
