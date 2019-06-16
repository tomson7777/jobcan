import API from './api';
import { NewOffer, OfferModel } from '../shared/models/offer.model';

const getOffers = (): Promise<OfferModel> => {
  return API.get('offers?search= ')
    .then((response: any) => response.data.items);
};

const addOffer = (offer: NewOffer) => {
  return API.post('offers', offer)
    .then((response: any) => {
      console.log(response);
      return response;
    });
};

export const OffersService = {
  getOffers,
  addOffer,
};
