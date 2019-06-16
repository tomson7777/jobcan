import { OfferModel } from '../shared/models/offer.model';

export interface State {
  offersReducer: {
    offers: {[offerId: string]: OfferModel};
  };
}

export const initialState: State = {
  offersReducer: {
    offers: {}
  },
};
