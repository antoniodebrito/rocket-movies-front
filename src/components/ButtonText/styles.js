import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.PINK};

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 70px;

  &:hover {
    transform: scale(1.1, 1.1);
    font-weight: 900;
  }
`;