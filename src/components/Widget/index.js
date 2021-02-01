import styled from 'styled-components';

const Widget = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(0, 0, 0, 0.85);
  max-height: fit-content;
  width: 100%;
  max-width: 550px;
  padding: 1.75rem 2.5rem 1.5rem 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  animation: 0.6s ease-out fadein running;
  transition: max-height .5s ease-in-out;

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
  position: relative;
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.2);
  text-decoration: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.contrastText};
  text-overflow: ellipsis;
  border: 1px solid transparent;
  margin: 0.75rem 0rem;
  transition: border 0.25s ease-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 5px ${({theme}) => theme.colors.shadowPrimary};
  }

  &:first-of-type {
    margin: 1.5rem 0rem 0.75rem 0rem;
  }

  &:last-of-type {
    margin: 0;
  }
`;

Widget.Topic = styled.label`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 0.35rem 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border 0.25s ease-out;
  display: block;
  border: 1px solid transparent;

  &:hover {
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
