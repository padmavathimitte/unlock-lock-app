// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  LockImage,
  LockText,
  SpanText,
  LockButton,
  ImageContainer,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onUnlock = () => {
    setLock(prevLock => !prevLock)
  }
  return (
    <AppContainer>
      <ImageContainer>
        {lock ? (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
        <LockText>
          {lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </LockText>
      </ImageContainer>

      <LockButton type="button" onClick={onUnlock}>
        {lock ? 'Unlock' : 'Lock'}
      </LockButton>
    </AppContainer>
  )
}

export default Unlock
