const toggleCloud = (state, action) => {
  let newCloudColor

  if (state.cloudColor === 'green') {
    newCloudColor = 'blue'
  } else if (state.cloudColor === 'blue') {
    newCloudColor = 'green'
  }

  return Object.assign({}, state, {cloudColor: newCloudColor})
}

export default toggleCloud
