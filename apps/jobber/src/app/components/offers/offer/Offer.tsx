import React from 'react';
import { OfferModel } from '../../../shared/models/offer.model';
import { Link } from 'react-router-dom';

export const Offer = (props: OfferModel) => {
  return (
    <li>
      <Link to={`/dashboard/offers/${props.id}`} activeClassName="active">{props.title}</Link>
    </li>
  );
};
