import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import Offers from '../offers/Offers';
import OfferDetails from '../offers/offerDetails/OfferDetails';
import Header from './header/Header';

interface ViewContainerState {
  isSidebarShown: boolean;
}

class ViewContainer extends Component<any, ViewContainerState> {
  state = {
    isSidebarShown: false,
  };

  toggleSidebar = () => {
    this.setState({ isSidebarShown: !this.state.isSidebarShown });
  };

  render() {
    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar}/>
        <Sidebar toggleSidebar={this.toggleSidebar} shown={this.state.isSidebarShown}/>

        <Route exact path={'/dashboard/offers'} component={Offers}/>
        <Route path={'/dashboard/offers/:id'} component={OfferDetails}/>
      </div>
    );
  }
}

export default ViewContainer;
