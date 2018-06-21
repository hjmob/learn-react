import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {PropTypes} from 'prop-types';
import styles from './Banner.less'

class Banner extends Component {
  static propTypes={
    img_data:PropTypes.array.isRequired
  }
  state = {
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
  }
  render() {
    return (
        <Carousel className='space-carousel'
          frameOverflow="visible"
          cellSpacing={8}
          slideWidth={0.95}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.props.img_data.map((val, index) => (
            <a
              key={index}
              href="#"
              style={{
                display: 'block',
                position: 'relative',
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
     
    );
  }
}

export default Banner;
