import toggleCloud from './toggleCloud'

const root = (state, action) => {
  switch(action.type) {
    case 'toggle_cloud':
      return toggleCloud(state, action)
    default:
      return state
  }
}

export default root
