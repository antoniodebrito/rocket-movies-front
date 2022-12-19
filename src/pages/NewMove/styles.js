import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header"
    "content"
  ;
  


  > main {
    grid-area: content;
    padding: 40px 123px 0;

    h1 {
      color: ${({theme}) => theme.COLORS.WHITE};
      padding-top: 24px;
      font-weight: 500;
      font-size: 36px;
      margin-bottom: 40px;
    }

    div {
      display: flex;
      gap: 40px;
    }
  }
`;

export const Bookmarks = styled.ul`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 24px;
  border-radius: 8px;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 40px;
  margin-top: 40px;

  
`;