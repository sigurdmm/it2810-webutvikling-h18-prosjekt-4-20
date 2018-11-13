import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import CoverImage from './CoverImage';

export default class CoverDisplay extends PureComponent {
  static propTypes = {
    media: PropTypes.array,
    hasSearched: PropTypes.bool.isRequired,
  };

  render() {
    const { media } = this.props;

    if (!this.props.hasSearched) {
      return null;
    }
    if (media === null) {
      return <p className='coverdisplay__error'>NOTHING FOUND</p>;
    }

    return <div className='coverdisplay'>
      {media.map((cover, i) => <CoverImage
        link={cover.thumbnails.small}
        key={`cover-${i}`}/>)
      }
    </div>;
  }
}
