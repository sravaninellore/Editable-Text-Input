import {Component} from 'react'
import {
  BgContainer,
  Container,
  Heading,
  InputContainer,
  Input,
  Button,
  Paragraph,
} from './styledComponents'

class TextInput extends Component {
  state = {clickSaveButton: false, inputField: '', savedText: ''}

  onClickButton = () => {
    const {inputField} = this.state
    this.setState(prevState => ({
      clickSaveButton: !prevState.clickSaveButton,
      savedText: inputField,
    }))
  }

  onChangeInputField = event => this.setState({inputField: event.target.value})

  render() {
    const {clickSaveButton, inputField, savedText} = this.state

    const buttonText = clickSaveButton ? 'Edit' : 'Save'

    return (
      <BgContainer>
        <Container>
          <Heading>Editable Text Input</Heading>

          <InputContainer>
            {!clickSaveButton && (
              <Input
                type="text"
                onChange={this.onChangeInputField}
                value={inputField}
              />
            )}
            {clickSaveButton && <Paragraph>{savedText}</Paragraph>}

            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </Container>
      </BgContainer>
    )
  }
}

export default TextInput
