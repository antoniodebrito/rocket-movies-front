import styled from "styled-components";

export const Container = styled.span`
  padding: 8px 16px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 8px;
  border-radius: 8px;
`;