import { styled } from "styled-components"

export const ButtonCalc = styled.button`
  background: ${({ background, theme }) =>
    background ?? theme.colors.blueForce};
  grid-column: ${({ gridColumn }) => gridColumn};
  font-size: ${({ fontSize, theme }) => fontSize ?? theme.fonts.size.button};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  height: ${({ height }) => height ?? "5rem"};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    border: 2px solid #242424;
  }
`
