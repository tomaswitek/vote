import React from 'react'
import NewUserForm from '../../components/Users/NewUserForm'

interface Props {}

const THEME = {
  light: 'light',
  dark: 'dark',
}

function NewUserPage(props: Props) {
  const {} = props

  return <NewUserForm />
}

export default NewUserPage
