export const incrementActionCreator = () => {
  const action = {
    type: 'INCREMENT'
  }
  return action
}


export const decrementActionCreator = () => {
  return {
      type: 'DECREMENT'
  }

}

export const stepActionCreator = ({target: {value}}) => {
  return  {
    type: 'CHANGE_STEP',
    value: Number(value)
  }

}