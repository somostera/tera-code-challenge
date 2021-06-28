import styled from 'styled-components';

type LikeButtonProps = {
  isLiked: boolean;
}

export const Container = styled.div`
  padding: 1rem;

  > a {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        height: 15rem;
      }
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9rem;

    > div {
      width: 80%;

      > h1 {
        font-size: 1.1rem;
        margin-top: 1rem;
        font-weight: 500;
      }
      > h2, h3 {
        font-size: 0.9rem;
        margin-top: 0.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.text_terciary }
      }
    }
  }
`;

export const LikeButton = styled.button<LikeButtonProps>`
  border: 0;
  background: none;
  padding: 0.2rem 0.2rem 0;

  > svg {
    color: ${({ theme, isLiked }) => isLiked ? theme.icon : theme.text };
    fill: ${({ theme, isLiked }) => isLiked ? theme.icon : 'transparent' };
  }
`;