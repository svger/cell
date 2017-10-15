'use strict';

import React, { Component, PropTypes } from 'react';
import CSSModule from 'react-css-modules';
import styles from './style/index.less';

class UI extends Component {

  render() {

    return (
      <div></div>
    )
  }
}

UI.propTypes = {

};

export default CSSModule(UI, styles, {
  allowMultiple: true
});
