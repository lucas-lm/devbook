import styled from 'styled-components'

export default styled.div`
  width: 90%;
  max-width: 1760px;
  margin: 16px auto;
  /* background-color: ${({ theme }) => theme.colors.background.paper}; */
  /* padding: ${({ theme }) => theme.spacing(1, 2)}; */

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`

export const Section = styled.section`
  margin: 10px auto;
  background-color: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing(1)};
  > * {
    margin: ${({ theme }) => theme.spacing(2)};
  }
`
