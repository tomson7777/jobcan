export interface OfferModel {
  id: number;
  title: string;
  userId: string;
  createdAt: string;
}

export interface NewOffer {
  title: string;
  userId: number;
}
