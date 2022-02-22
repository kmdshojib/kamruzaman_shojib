import React, { Component } from 'react'
import './spinner.styles.scss'

class Spinner extends Component {
    
    render() { 
        return (
            <div className="spinerOverlay">
                <div className="spinContainer" />
            </div>
        );
    }
}
 
export default Spinner;