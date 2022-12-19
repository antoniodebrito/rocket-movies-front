import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  font-weight: 500;
`;
