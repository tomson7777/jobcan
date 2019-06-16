import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OfferModel } from '../../shared/models/offer.model';
import { loadOffers } from '../../store/actions/offers.actions';
import NewOffer from './newOffer/NewOffer';
import { Offer } from './offer/Offer';

interface OffersProps {
  offers: OfferModel[];
  loadOffers: any;
}

interface OffersState {
  isLoading: boolean;
}

class Offers extends Component<OffersProps, OffersState> {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.fetchOffers();
  }

  fetchOffers() {
    this.setState({ isLoading: true });

    this.props.loadOffers().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (!this.props.offers) {
      return null;
    }

    const offers = this.props.offers
      .map(offer => <Offer key={offer.id.toString()} {...offer}/>);

    return (
      <div>
          <NewOffer/>
          {
            this.state.isLoading
            ? <p>Loading...</p>
            : <ul>{offers}</ul>
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: Object.values(state.offersReducer.offers),
});

const mapDispatchToProps = { loadOffers };

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
