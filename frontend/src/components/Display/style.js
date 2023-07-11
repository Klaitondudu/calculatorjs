import { styled } from "styled-components"

export const DisplayCont = styled.div`
  width: 23.75rem;
  height: ${({ height }) => height};
  transition: height 0.3s ease;
  background: #0d7fa9;
  border-radius: 5px;
  overflow: auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  &.DisplayActive {
    height: 45rem;
  }
`

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-right: 1.75rem;
  padding-bottom: 0.37rem;
  height: 100%;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  margin-top: auto;
  font-size: 1.5rem;
`

export const Current = styled.div`
  color: white;
  font-size: ${({ theme }) => theme.fonts.size.display};
`
export const HeaderCalc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.size.header};
  color: #ffffff;
  padding-bottom: 13px;
  letter-spacing: 1px;
  button {
    color: #fff;
    font-size: ${({ theme }) => theme.fonts.size.header};
    cursor: pointer;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secundary};
      border-radius: 5px;
    }
  }
`
