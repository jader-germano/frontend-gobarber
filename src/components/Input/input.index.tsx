import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { InputContainer, Error } from './input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: React.ComponentType<IconBaseProps>;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ icon: Icon, error, onFocus, onBlur, ...rest }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const [isFilled, setIsFilled] = useState(false);

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            setIsFilled(!!e.target.value);
            onBlur?.(e);
        };

        return (
            <InputContainer hasErrors={!!error} isFilled={isFilled} isFocused={isFocused}>
                {Icon && <Icon size={16} />}
                <input
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />
                {error && (
                    <Error title={error}>
                        <FiAlertCircle color="#c53030" size={16} />
                    </Error>
                )}
            </InputContainer>
        );
    },
);

Input.displayName = 'Input';

export default Input;
