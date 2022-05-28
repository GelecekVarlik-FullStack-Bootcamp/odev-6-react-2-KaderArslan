import styled from 'styled-components'
const Styled = styled.div`
  .container {
    border: 1px solid black;
    width: 900px;
    height: 900px;
    flex-direction: column;
    display: flex;
    margin: auto;
    
    & > .baslik {
      border: 1px solid black;
      width: 900px;
      height: 100px;
    }
  }
  .content {
    border: 1px solid black;
    width: 900px;
    flex-grow: 1;
    flex-direction: row;
    display: flex;
  }
  .sol {
    border: 1px solid black;
    width: 200px;
  }
  .sag {
    border: 1px solid black;
    flex-grow: 1;
  }
`
export default Styled
