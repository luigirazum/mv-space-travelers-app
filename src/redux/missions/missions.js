/**
 * action types for MISSIONS
 */
const PREFIX = 'spaceTravelers/missions';
const CHECK_STATUS = `${PREFIX}/CHECK_STATUS`;

/**
 * initialState for MISSIONS
 */
const initialState = [];

/**
 * reducer for MISSIONS
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return (
        <>
          <p>We are working hard on new Missions. 👩‍🚀</p>
          <p>We&apos;ll be ready for launch very soon. 🚀</p>
        </>
      );
    default:
      return state;
  }
};

/**
 * action creators for MISSIONS
 */
const checkStatus = () => ({ type: CHECK_STATUS });

export { checkStatus };
export default reducer;
