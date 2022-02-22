import React, { Component } from 'react';

import rightArrow from '../../../assets/rightarrow.png'
import leftArrow from '../../../assets/leftarrow.png'

import './slide-image.styles.scss'

export default class SlideImage extends Component {

   state = {
            currentImage: 0
    }


    nextImage = () => {
        let indexNum = this.props.images.length - 1;

        if (this.state.currentImage === indexNum) {
            this.setState({
                currentImage: 0
            })
        }

        else if (this.state.currentImage < indexNum) {
            let num = this.state.currentImage;
            num++;

            this.setState({
                currentImage: num
            })
        }
    }

    prevImage = () => {
        let nthIndex = this.props.images.length - 1;

        if (this.state.currentImage === 0) {
            this.setState({
                currentImage: nthIndex
            })
        }

        else if (this.state.currentImage > 0) {
            let num = this.state.currentImage;
            num--;

            this.setState({
                currentImage: num
            })
        }
    }

    render() {
        return (
            <div>
                <div className="wrappeSlide">
                        <div
                        className="chevron"
                        onClick={() => this.prevImage(this.state.currentImage)}
                        >
                            <img 
                                src={leftArrow}
                                alt="chevron-right"
                            />
                        </div>

                        <div className="middleImage">
                            <img 
                                src={this.props.images[this.state.currentImage]}
                                alt="product"
                            />
                        </div>

                        <div 
                        className="chevron"
                        onClick={() => this.nextImage(this.state.currentImage)}
                        >
                            <img src={rightArrow} alt="chevron-left"/>
                        </div>
                </div>
            </div>
        )
    }
}