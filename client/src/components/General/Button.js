import { ButtonNumber, Description, StyledDefaultButton } from "./Button.styled";

export const DefaultButton = ({ number, description, onClick, backgroundColor }) => {
    return (
        <StyledDefaultButton onClick={onClick} backgroundColor={backgroundColor}>
            <ButtonNumber>{number}</ButtonNumber><Description>{description}</Description>
        </StyledDefaultButton>
    );
};