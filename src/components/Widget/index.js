import styled from 'styled-components';

const Widget = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(0,0,0, .75);
  width: 100%;
  max-width: 550px;
  padding: 1.75rem 2.5rem 1.5rem 2.5rem;
  margin-bottom: 2rem;
  position: relative;

  * {
    margin: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;

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
  font-size: .9rem;
  line-height: 1.65rem;

  input[type='text'] {
    font-size: 0.9rem;
    width: 100%;
    margin: 1.25rem 0 1rem 0;
    padding: 0.75rem;
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.inputBg};
  }
`;

Widget.Button = styled.a`
  padding: 0.5rem;
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.colors.textContrast};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

Widget.CommunityLinks = styled.a`
  display: block;
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: .75rem 0rem;

  &:first-of-type {
    margin: 1.5rem 0rem .75rem 0rem;
  }

  &:last-of-type {
    margin:0;
  }
`;

export default Widget;
