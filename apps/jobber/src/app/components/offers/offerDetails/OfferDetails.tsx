import React, { Component } from 'react';
import { connect } from 'react-redux';

class OfferDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.match.params.id;
    const offer = this.props.offers[id];

    return <div>{offer.title}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.offersReducer.offers,
  }
};

export default connect(mapStateToProps)(OfferDetails);
