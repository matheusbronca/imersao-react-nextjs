import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    font-size: 1.175rem;
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary}90;
      border: 1px solid
        ${({ theme }) => theme.colors.teste || theme.colors.primary};
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primary};

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
        color: #${({ theme }) => theme.colors.successText || theme.colors.constrastText};
        border: 1px solid #00ff7f;
        box-shadow: 0px 0px 10px #00ff7f99;
      }

      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: #${({ theme }) => theme.colors.wrongText || theme.colors.constrastText};
        border: 1px solid gray;
        box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.wrong || 'gray'};
      }
    }

    &:focus {
      opacity: 0.5;
    }
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
