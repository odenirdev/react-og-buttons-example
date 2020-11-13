import React from 'react'
import Styled, { keyframes } from 'styled-components'
import './styles.css'
import Highlight from 'react-highlight'

import Button from 'react-og-buttons'

import WebFont from 'webfontloader'

import TSIcon from './images/typescript-icon.png'
import StyledIcon from './images/styled-component-icon.png'
import ReactIcon from './images/react-icon.png'

import 'highlight.js/styles/dracula.css'

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'Nunito:300,400,700']
  }
})

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = Styled.div`
  animation: ${rotate} 3s linear infinite;
  width: fit-content;
`

const Container = Styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  section {
    margin: 1rem;
  }
`

const Grid = Styled.div`
  width: 100%;
  max-width: 320px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 24px;
  }

  padding: 1rem;
`

const App = () => {
  return (
    <>
      <Container>
        <header>
          <h1>React OG Buttons</h1>
          <p>Buttons make by OG Developer</p>
        </header>
        <section>
          <h2>Install</h2>
          <Highlight>{`npm install --save react-og-buttons`}</Highlight>
          <span>or</span>
          <Highlight>{`yarn add react-og-buttons`}</Highlight>
        </section>
        <section>
          <h2>Setup</h2>
          <Highlight>
            {`
        :root {
          --primary-color: #191919;
          --secundary-color: #fafafa;
          --title-font: Roboto;
        }`}
          </Highlight>
        </section>
        <section>
          <h2>Example</h2>
          <Highlight>
            {`
            <Grid>
              <Button>OG Button</Button>
              <Button backgroundColor='#2196f3' color='#fafafa'>
                Edit Button
              </Button>
              <Button typeStyle='success'>Success Button</Button>
              <Button typeStyle='outline'>Outline Button</Button>
              <Button typeStyle='warning'>Warning Button</Button>
              <Button typeStyle='danger'>Danger Button</Button>
            </Grid>
          `}
          </Highlight>
          <Grid>
            <Button>OG Button</Button>
            <Button backgroundColor='#2196f3' color='#fafafa'>
              Edit Button
            </Button>
            <Button typeStyle='success'>Success Button</Button>
            <Button typeStyle='outline'>Outline Button</Button>
            <Button typeStyle='warning'>Warning Button</Button>
            <Button typeStyle='danger'>Danger Button</Button>
          </Grid>
        </section>
      </Container>
      <footer>
        <div>
          <strong>OG Developer</strong>
          <span>
            {'  '}- License MIT © [odenirdev](
            <a
              href='https://github.com/odenirdev'
              target='_blank'
              rel='noreferrer noopener'
            >
              https://github.com/odenirdev
            </a>
            )
          </span>
        </div>
        <div className='icones'>
          <a
            href='https://styled-components.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={StyledIcon} alt='Styled components icon' width='32px' />
          </a>
          <a
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={TSIcon} alt='Typescript icon' width='32px' />
          </a>
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Rotate>
              <img src={ReactIcon} alt='Typescript icon' width='32px' />
            </Rotate>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
