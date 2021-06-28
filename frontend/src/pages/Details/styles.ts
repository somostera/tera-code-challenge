import styled from 'styled-components';

type LikeButtonProps = {
  isLiked: boolean;
}

export const Container = styled.div`
  width: 100%;

  > a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 3rem 0;

    color: ${({ theme }) => theme.text_terciary };

    > p {
      margin-left: 0.2rem;
      font-weight: 500;
    }
  }

  @media(max-width: 720px) {
    > a {
      padding: 1rem 1rem 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 5rem;

  > div {
    max-width: 750px;
    margin: 0 auto;
    display: flex;

    > section {      
      > h1 {
        font-size: 1.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text };
      }

      > section {
        display: none;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;

        > h2 {
          font-size: 1rem;
          font-weight: 400;
          color: ${({ theme }) => theme.text };
        }
      }

      > h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.text };
        margin-top: 0.2rem;
      }

      > h3 {
        margin-top: 0.5rem;
        font-size: 1.1rem;
        font-weight: 400;
      }

      > p {
        margin-top: 1.2rem;
      }
    }

    > div {
      padding: 1rem;        
      > img {
        height: 22rem;
      }
    }
  }

  @media(max-width: 1080px) {
    > div {
      width: 100%;
      padding: 1rem;

      > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > section {
          display: flex;
          flex-direction: column;
          width: 100%;

          > div {
            margin-top: 1rem;
            align-self: center;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            > img {
              max-width: 100%;
            }
          }

          > section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1rem;

            > div {
              > h2 {
                font-size: 1.3rem;
                font-weight: 500;
              }
            }

            > h3 {
              font-size: 1.3rem;
              width: 8rem;
              font-weight: 500;
            }
          }
        }

        > div {
          display: none;
        }

        > h2 {
          display: none;
        }

        > h3 {
          display: none;
        }

        > p {
          margin-top: 1.2rem;
        }
      }

      > div {
        display: none;
      }
    }
  }
`;

export const LikeButton = styled.button<LikeButtonProps>`
  border: 0;
  background: none;

  > svg {
    color: ${({ theme, isLiked }) => isLiked ? theme.icon : theme.text };
    fill: ${({ theme, isLiked }) => isLiked ? theme.icon : 'transparent' };
  }

  @media(max-width: 1080px) {
    margin-top: -33px;
    margin-right: 10px;
  }
`;