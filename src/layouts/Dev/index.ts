import styled from 'styled-components'

export default styled.div`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.colors.background.paper}; */
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.spacing(2)};
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
