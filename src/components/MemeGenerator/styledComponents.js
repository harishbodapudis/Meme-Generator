// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TextLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px 0px;
`
export const MemeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #7e858e;
`

export const Heading = styled.h1`
  color: #35469c;
`

export const InputBox = styled.input`
  color: #7e858e;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-top: 6px;
  outline: none;
  padding: 6px;
`
export const SelectBox = styled.select`
  color: #7e858e;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-top: 6px;
  outline: none;
  padding: 6px;
`

export const ButtonBox = styled.button`
  background-color: #0b69ff;
  border: 0px;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
`
export const ImageBox = styled.div`
  visibility: ${props => (props.submit ? 'visible' : 'hidden')};
  background-image: url(${props => props.imgUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 60%;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  text-align: center;
  color: #ffffff;
`

export const TopBottomText = styled.p`
  font-size: ${props => props.fontSize}px;
`
