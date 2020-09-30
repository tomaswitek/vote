import React from 'react'
import { Button, KIND } from 'baseui/button'

interface Props {}

const THEME = {
  light: 'light',
  dark: 'dark',
}

function NewUserPage(props: Props) {
  const {} = props

  return (
    <Button kind={KIND.secondary} onClick={() => undefined}>
      Toggle light/dark theme!
    </Button>
  )
}

export default NewUserPage
