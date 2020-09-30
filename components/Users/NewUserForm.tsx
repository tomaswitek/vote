import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from 'baseui/input'
import { FormControl } from 'baseui/form-control'

interface Props {}

function NewUserForm(props: Props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl label="First Name">
        <Input name="firstName" inputRef={register({ required: true })} />
      </FormControl>
      <FormControl label="Last Name">
        <Input name="lastName" inputRef={register({ required: true })} />
      </FormControl>
      <FormControl label="Email">
        <Input name="email" inputRef={register({ required: true })} />
      </FormControl>
      <Input type="submit" />
    </form>
  )
}

export default NewUserForm
