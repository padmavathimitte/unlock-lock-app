// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: #000;

  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div``
export const LockImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 30px;
`

export const LockText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const LockButton = styled.button`
  width: 85px;
  background-color: #06b6d4;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: transparent;
  margin-top: 40px;
`
