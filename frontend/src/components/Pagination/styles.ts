import styled from 'styled-components';

export const Container = styled.footer`
  padding-bottom: 2rem;

  > div {
    display: flex;
    
    > span {
      align-self: flex-end;
      font-weight: 500;
      font-size: 1.6rem;
    }

    > button {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      border: 0;
      background: none;
      color: ${({ theme }) => theme.text_terciary };

      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.4rem;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(0.6);
      }

      &:disabled {
        cursor: default;
        font-weight: 600;
        color: ${({ theme }) => theme.text };

        &:hover {
          filter: opacity(1);
        }
      }
    }

    > button:first-child, button:last-child {
      background: none;
      color: ${({ theme }) => theme.text };
      font-size: 1.4rem;

      &:hover {
        background: none;
        filter: opacity(0.6);
      }

      &:disabled {
        opacity: 0.3;

        &:hover {
          background: none;
          filter: opacity(1);
        }
      }
    }
  }
`;
