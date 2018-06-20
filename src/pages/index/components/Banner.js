import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Banner.less'

class Banner extends Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [{
            idx:'1',
            img_url:'//img.ithome.com/newsuploadfiles/focus/c41c54ed-025c-4f7c-b929-05461e1745cb.jpg',
        },{
            idx:'2',
            img_url:'//img.ithome.com/newsuploadfiles/focus/d712cb93-5bb4-4852-b113-4ed28b84ac58.jpg',
        },{
            idx:'3',
            img_url:'//img.ithome.com/newsuploadfiles/focus/22789b38-647b-4ed0-a590-9c0046afe0de.jpg',
        },{
            idx:'4',
            img_url:'//img.ithome.com/newsuploadfiles/focus/56125e6f-9932-4a87-a72e-bc08d59adb38.jpg',
        },{
            idx:'5',
            img_url:'//img.ithome.com/newsuploadfiles/focus/22789b38-647b-4ed0-a590-9c0046afe0de.jpg',
        },{
            idx:'6',
            img_url:'//img.ithome.com/newsuploadfiles/focus/5651fc72-dd80-4800-a752-af8bc4a7641c.jpg',
        },{
            idx:'7',
            img_url:'//img.ithome.com/newsuploadfiles/focus/d712cb93-5bb4-4852-b113-4ed28b84ac58.jpg',
        },],
      });
    }, 100);
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
          {this.state.data.map((val, index) => (
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