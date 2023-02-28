import styled from "styled-components";

export const StyledDefaultButton = styled.button`
    width: 292px;
    text-align: left;
    padding: 14px 28px;
    border: 1px solid var(--medium-grey-color);
    margin-top: 16px;
    cursor: pointer;
    transition: 0.4s;
    font-size: 0.875rem;
    display: block;

    &:hover {
        background-color: var(--dark-grey-color);
    }

    &:focus:not(:disabled) {
        background-color: ${(props) => props.backgroundColor};
        transition: inherit;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    span {
        display: inline;
        padding-right: 25px;
        font-family: var(--body-font);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.161rem;
    }
`

export const ButtonNumber = styled.span`
    color: var(--transparent-white-color);
`
export const Description = styled.span`
    color: var(--white-color);
`