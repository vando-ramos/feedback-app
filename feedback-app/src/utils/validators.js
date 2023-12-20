export function validateEmptyAndLength3 (value) {
  if (!value) {
    return 'This field is required!'
  }

  if (value.length < 3) {
    return 'Minimum 4 characters!'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return 'This field is required!'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return 'Fill in with a valid email!'
  }

  return true
}
