import { OffersService } from '../../services/offers.service';

export enum ActionTypes {
  FETCH_OFFERS_SUCCESS = 'FETCH OFFERS SUCCESS',
}

export const loadOffersSuccess = (offers) => ({
  type: ActionTypes.FETCH_OFFERS_SUCCESS,
  payload: { offers },
});

export function loadOffers() {
  return function (dispatch) {
    return OffersService.getOffers().then(offers => {
      dispatch(loadOffersSuccess(offers));
    });
  }
}
