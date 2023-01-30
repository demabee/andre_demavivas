import styled from 'styled-components';

const StyledButton = styled.button` 
  border-radius: 3em;
  padding: 10px 30px;
  color: white;
  font-weight: bold;
  font-size: 25px;
  // font-family: pokefont;
  background: var(--quagsire-muddy);

  &:hover {
    background: transparent;
    color: var(--quagsire-muddy);
    border: 3px solid var(--quagsire-muddy);
    padding: 7px 30px;
  }
`;

const CustomButton = ({ children }) => (<StyledButton>{children}</StyledButton>);

export default CustomButton;