import styled from 'styled-components';

const Widget = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  max-width: 550px;
  padding: 1.75rem 2.5rem 1.5rem 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  animation: 0.6s ease-out fadein running;

  * {
    margin: 0;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

Widget.Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;

  * {
    margin: 0;
    font-size: 1.5rem;
  }

  &:before {
    content: '';
    background-color: ${({ theme }) => theme.colors.primary};
    width: 1rem;
    height: 2rem;
    position: absolute;
    display: block;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    left: -2.5rem;
  }
`;

Widget.Content = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  line-height: 1.65rem;
`;

Widget.CommunityLinks = styled.a`
  display: block;
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 0.75rem 0rem;

  &:first-of-type {
    margin: 1.5rem 0rem 0.75rem 0rem;
  }

  &:last-of-type {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: .35rem 1rem; 
  margin-bottom: .75rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border 0.25s ease-out;
  display: block;
  border: 1px solid black;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:first-of-type {
    margin-top: 1rem;
  }

  &:last-of-type {
    margin-bottom: 1.5rem;
  }

`;

export default Widget;
