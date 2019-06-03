export interface Offer {
  id: number;
  title: string;
  // userId: number;
  createdAt: string;
}

export interface OfferDetails extends Offer {
  company: string;
}
