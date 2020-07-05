import styled, { css } from 'styled-components';

interface InputContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}
export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    align-items: center;
    background: #232129;
    border: 2px solid #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}
    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;
        &::placeholder {
            color: #666360;
        }
    }
    svg {
        margin-right: 16px;
    }
`;