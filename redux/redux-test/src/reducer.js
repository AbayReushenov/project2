const reducer = (state = 0, action) => {
    switch  (action.type) {
      case '999':
        return ++state;
      case "000":
        return --state;
      case '***':
        return  state + action.step;
      default:
        return state;
    }
  }
  
export default reducer