import React, { Component } from 'react';
import Svg from './Svg.js';

class ArticleIcon extends Component {
  render() {
    return (
      <Svg {...this.props}>
        <g transform="scale(0.0234375, 0.0234375)">
          <path d="M678.9 98.6l-20.5 0-51.2 0L217.4 98.6c-33.9 0-61.4 26.2-61.4 58.5l0 715.7c0 32.2 27.5 58.5 61.4 58.5l584.4 0c33.9 0 61.4-26.2 61.4-58.5L863.2 304.5 678.9 98.6 678.9 98.6zM757.6 290l-80.6 0 0-94.2L757.6 290 757.6 290zM790 868.2 230.4 868.2c-5.7 0-10.1-3.8-10.1-7.2L220.3 168.1c0-3.4 4.3-7.2 10.1-7.2l380.3 0 0 151c0 27.8 22.6 50.3 50.3 50.3l139 0L800 861C800 864.4 795.7 868.2 790 868.2L790 868.2zM789.8 868.2M557 352c0 17.7-14.3 32-32 32L352 384c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l173 0C542.6 320 557 334.3 557 352L557 352zM707.5 511c0 17.7-14.3 32-32 32l-321 0c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l321 0C693.1 479 707.5 493.3 707.5 511L707.5 511zM707.5 670c0 17.7-14.3 32-32 32l-321 0c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l321 0C693.1 638 707.5 652.4 707.5 670L707.5 670z"
          />
        </g>
      </Svg>
    );
  }
}

export default ArticleIcon