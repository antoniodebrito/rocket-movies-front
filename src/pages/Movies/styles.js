import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    padding: 50px 223px;
    color: ${({theme}) => theme.COLORS.WHITE};
    
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;

      button {
        width: 207px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }   
`;

export const Content = styled.section`
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 32px 32px 0;
  margin-bottom: 24px;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
    text-align: justify;
  }

  .tags {

    span {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      margin: 0;
    }
  }
`;
