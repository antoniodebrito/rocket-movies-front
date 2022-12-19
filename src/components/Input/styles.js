import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  
  
  
  > input {
    padding: 12px;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 19px 24px;
    font-weight: 400;
  }

   svg {
      margin-left: 16px;
      height: 18px;
      width: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;