const initialState = {
  isVisible: false,
};

const navbarVisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR_VISIBILITY":
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case "RESET_NAVBAR_VISIBILITY":
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};

export default navbarVisibilityReducer;
