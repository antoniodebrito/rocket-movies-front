import styled from "styled-components";

export const Container = styled.div`
  width: 212px;
  display: flex;
  align-items: center;
  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : theme.COLORS.WHITE};

  border-radius: 10PX;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;

  > input {
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;

  }

  > button {
    background: none;
    border: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  


`;