import styled from '@emotion/styled'
import Name from './Name'

const success = "green"
const danger = "red" 

const Container = styled.div `
display: flex;
flex-direction: column; 
`
const MyButton = styled.button`
    background-color: ${props => (props.success ? success : danger)};
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: white;
`

const SpecialName = styled(Name)`
  color: purple;
  font-size: 50px;
  `


export const Example4Complete = () => {
    return(<>
        <Container>
        <div>
            <MyButton success>my button 2</MyButton>
            <MyButton>my button 2</MyButton>
        </div>
        <div>
            <SpecialName name="me"></SpecialName>
        </div>
        </Container>
        
    </>)
}