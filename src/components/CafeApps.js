import React from 'react';
import CafeAppHeader from './CafeAppHeader';
import { getInitialData } from '../utils/index';
import ListCafe from './ListCafe';
import CafeAppFooter from './CafeAppFooter';

class CafeApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafes: getInitialData(),
    };
  }

  render() {
    return (
      <div>
        <CafeAppHeader />
        <div className="cafe-app__body"></div>
        <CafeAppFooter />
      </div>
    );
  }
}

export default CafeApps;
