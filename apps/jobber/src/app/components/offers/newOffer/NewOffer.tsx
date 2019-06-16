import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OffersService } from '../../../services/offers.service';

interface NewOfferState {
  isFormValid: boolean;
  isLoading: boolean;
  offerForm: {
    title: string;
  }
}
class NewOffer extends Component<{}, NewOfferState> {
  constructor(props) {
    super(props);
  }

  state = {
    isFormValid: false,
    isLoading: false,
    offerForm: {
      title: '',
    }
  };

  handleControlChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    this.setState({
      offerForm: {
        title: e.target.value,
      },
    }, this.validateForm);
  };

  saveOffer = (e) => {
    e.preventDefault();
    const body = {
      title: this.state.offerForm.title,
      userId: 1,
    };

    OffersService.addOffer(body).then(console.log);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.saveOffer}>
          <input placeholder="title" value={this.state.offerForm.title} onChange={this.handleControlChange} />
          <button
            type="submit">Save</button>
        </form>
      </div>
    );
  }

  private validateForm = () => {
    this.setState(state => ({
      isFormValid: this.isFormValid(state),
    }));
  };

  private isFormValid(state: NewOfferState): boolean {
    return Boolean(this.state.offerForm.title.trim());
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(NewOffer);
