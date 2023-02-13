import {Component} from 'react'
import {
  TextLabelBox,
  MemeContainer,
  Heading,
  InputBox,
  ButtonBox,
  MainContainer,
  ImageBox,
  SelectBox,
  TopBottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {fontSize: 8, imgUrl: '', topText: '', bottomText: '', submit: false}

  getImageUrl = event => {
    console.log(event.target.value)
    this.setState({imgUrl: event.target.value})
  }

  getTopText = event => {
    console.log(event.target.value)
    this.setState({topText: event.target.value})
  }

  getBottomText = event => {
    console.log(event.target.value)
    this.setState({bottomText: event.target.value})
  }

  getFontSize = event => {
    console.log(event.target.value)
    this.setState({fontSize: event.target.value})
  }

  submitImageData = event => {
    event.preventDefault()
    const {topText, bottomText, imgUrl} = this.state
    if (topText && bottomText && imgUrl) {
      this.setState({submit: true})
    }
  }

  render() {
    const {fontSize, imgUrl, topText, bottomText, submit} = this.state

    return (
      <MainContainer>
        <MemeContainer>
          <Heading>Meme Generator</Heading>
          <form onSubmit={this.submitImageData}>
            <TextLabelBox>
              <label htmlFor="imageUrl">Image URL</label>
              <InputBox
                type="text"
                placeholder="Enter the Image URL"
                onChange={this.getImageUrl}
                id="imageUrl"
              />
            </TextLabelBox>
            <TextLabelBox>
              <label htmlFor="topText">Top Text</label>
              <InputBox
                type="text"
                placeholder="Enter the Top Text"
                onChange={this.getTopText}
                id="topText"
              />
            </TextLabelBox>
            <TextLabelBox>
              <label htmlFor="bottomText">Bottom Text</label>
              <InputBox
                type="text"
                placeholder="Enter the Bottom Text"
                onChange={this.getBottomText}
                id="bottomText"
              />
            </TextLabelBox>
            <TextLabelBox>
              <label htmlFor="fontSize">Font Size</label>
              <SelectBox onChange={this.getFontSize} id="fontSize">
                {fontSizesOptionsList.map(value => (
                  <option key={value.optionId}>
                    {parseInt(value.displayText)}
                  </option>
                ))}
              </SelectBox>
            </TextLabelBox>
            <ButtonBox as="button" type="submit">
              Generate
            </ButtonBox>
          </form>
        </MemeContainer>
        <ImageBox imgUrl={imgUrl} submit={submit} data-testid="meme">
          <TopBottomText fontSize={fontSize} submit={submit}>
            {topText}
          </TopBottomText>
          <TopBottomText fontSize={fontSize} submit={submit}>
            {bottomText}
          </TopBottomText>
        </ImageBox>
      </MainContainer>
    )
  }
}

export default MemeGenerator
