import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  padding: 0.75rem;
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.contrastText};
  transition: box-shadow 0.15s ease-out, transform 0.15s ease-out;

  a {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  &:disabled {
    cursor: initial;
    color: gray;
    background-color: rgba(50, 0, 0);

    &:hover {
      box-shadow: none;
    }
  }

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    box-shadow: 0px 2px 15px rgba(150, 0, 0);
  }
`;

export default Button;
