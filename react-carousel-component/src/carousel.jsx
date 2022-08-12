import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 3,
      intervalId: null
    };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    const carousel = setInterval(() => {
      if (this.state.currentImage === 3) {
        return this.setState({ currentImage: 0 });
      }
      this.setState({ currentImage: this.state.currentImage + 1 });
    }, 3000);
    this.setState({ intervalId: carousel });
  }

  handleLeft(event) {
    clearInterval(this.state.intervalId);
    if (this.state.currentImage === 0) {
      return this.setState({ currentImage: 3 });
    }
    this.setState({ currentImage: this.state.currentImage - 1 });
    this.timer();
  }

  handleRight(event) {
    clearInterval(this.state.intervalId);
    if (this.state.currentImage === 3) {
      return this.setState({ currentImage: 0 });
    }
    this.setState({ currentImage: this.state.currentImage + 1 });
    this.timer();
  }

  dotClick(event) {
    clearInterval(this.state.intervalId);
    this.setState({ currentImage: Number(event.target.id) });
    this.timer();
  }

  dotChange() {

  }

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;
    return (
      <main className='container'>
        <div className='row carousel'>
          <i onClick={this.handleLeft} id="chev1" className="fas fa-chevron-left fa-3x" />
          <img src={images[currentImage].imgUrl} alt={images[currentImage].alt} />
          <i onClick={this.handleRight} id="chev2" className="fas fa-chevron-right fa-3x" />
        </div>
        <div className="row dots">
          <i onClick={this.dotClick} id="0" className={(currentImage === 0) ? 'dot fas fa-circle marg-5' : 'dot far fa-circle marg-5'} />
          <i onClick={this.dotClick} id="1" className={(currentImage === 1) ? 'dot fas fa-circle marg-5' : 'dot far fa-circle marg-5'} />
          <i onClick={this.dotClick} id="2" className={(currentImage === 2) ? 'dot fas fa-circle marg-5' : 'dot far fa-circle marg-5'} />
          <i onClick={this.dotClick} id="3" className={(currentImage === 3) ? 'dot fas fa-circle marg-5' : 'dot far fa-circle marg-5'} />
        </div>
      </main>
    );
  }
}
