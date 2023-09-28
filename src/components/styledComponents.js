import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
  font-family: 'Roboto';
`

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 22px 60px 22px 60px;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const Heading = styled.h1`
  margin-top: 25px;
  font-size: 26px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 22px;
    margin-top: 13px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: #cbd2d9 1px solid;
  outline: none;
  border-radius: 4px;
  padding: 9px;
  color: #323f4b;
  width: 220px;
  font-size: 16px;

  @media screen and (max-width: 767px) {
    width: 180px;
  }
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: none;
  margin-left: 15px;
  padding: 10px 15px 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 25px;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  color: grey;
  font-size: 16px;
  width: 220px;
  margin: 0;
`
