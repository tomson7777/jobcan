import { ActionTypes } from '../actions/offers.actions';
import { initialState } from '../initial-state';

export const offersReducer = (state = initialState.offersReducer, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_OFFERS_SUCCESS:
      const offers = [...action.payload.offers]
        .reduce((acc, next) => Object.assign(acc, { [next.id]: next }), {});

      return {
        ...state,
        offers,
      };
    default:
      return state;
  }
};
