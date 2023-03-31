import { ChangeEvent, useState } from "react"

export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState(initialForm)

  const onInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    })

  }

  const reset = () => {
    setFormState(initialForm);
  }

  return {
    formState,
    onInputChange,
    reset
  }
}
