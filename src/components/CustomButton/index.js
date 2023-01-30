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
    background: white;
    color: var(--quagsire-muddy);
    border: 2px solid var(--quagsire-muddy);
    padding: 8px 30px;
  }
`;

const CustomButton = ({ children }) => (<StyledButton>{children}</StyledButton>);

export default CustomButton;