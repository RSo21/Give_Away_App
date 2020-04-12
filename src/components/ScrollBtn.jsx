import React, { Component } from 'react';
import {CircleArrow as ScrollUpButton}  from "react-scroll-up-button";

 class ScrollBtn extends Component {
    render() {
        return (
            <div>
                <ScrollUpButton style={{zIndex: 2}} />
            </div>
        );
    }
}

export default ScrollBtn;