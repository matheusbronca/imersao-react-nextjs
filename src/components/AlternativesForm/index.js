import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    font-size: 1.175rem;
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary}90;
      border: 1px solid red;
      box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.8);

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
        color: #00FF7F;
        border: 1px solid #00FF7F;
        box-shadow: 0px 0px 10px #00FF7F99;
      }

      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: grey;
        border: 1px solid gray;
        box-shadow: 0px 0px 10px gray;
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
