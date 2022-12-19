import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 116px;
  padding: 24px 123px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  display: flex;
  justify-content: space-between;
  align-items: center;


  .input-area {
    width: 630px;
    height: 56px;
    border-radius: 10px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }

  > div {
    width: 198px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-perfil {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
      > strong {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }


    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }
  }
`;