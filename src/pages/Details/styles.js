import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  height: 100vh;

  > main {
    margin: 40px 123px;
    grid-area: content;
  }

`;

export const Rating = styled.div`
    width: 368px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 40px;

    svg {
      font-size: 22px;
      color:${({ theme }) => theme.COLORS.PINK};
    }

    > span {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 24px 0;

      h1 {
        font-size: 36px;
        font-weight: 500;
        line-height: 47px;
      }

      div {
        display: flex;
        gap: 8px;
      }
    }
`;

export const User =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  
    img {
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }    
  }
`;

export const Article = styled.article`
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 40px auto;
  text-align: justify;
  display: grid;
  gap: 16px;
`;
