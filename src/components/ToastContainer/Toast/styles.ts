import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
    type?: 'success' | 'error' | 'info';
    hasDesciption: boolean;
}

const toastTypeVariations = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
    success: css`
        background: #e6fffa;
        color: #2e656a;
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `,
};

const slideIn = keyframes`
    from { transform: translateX(120%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;

export const Container = styled.div<ContainerProps>`
    width: 360px;
    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    animation: ${slideIn} 0.3s ease-out;

    display: flex;
    & + div {
        margin-top: 8px;
    }

    ${props => toastTypeVariations[props.type || 'info']}

    > svg {
        margin: 4px 12px 0 0;
    }

    div {
        flex: 1;
        p {
            margin-top: 4px;
            font-size: 14px;
        }
    }

    button {
        position: absolute;
        right: 16px;
        top: 19px;
        opacity: 0.6;
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }

    ${props =>
        !props.hasDesciption &&
        css`
            align-items: center;
            svg {
                margin-top: 0;
            }
        `}
`;
