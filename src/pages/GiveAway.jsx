import React, { Component } from 'react';
import GiveAwayHeader from '../components/GiveAway/GiveAwayHeader';
import GiveAwayForm from '../components/GiveAway/GiveAwayForm';
import HomeFooter from '../components/HomeFooter';
import ScrollBtn from '../components/ScrollBtn'


class GiveAway extends Component{
    render(){
        return(
            <>
                <GiveAwayHeader />
                <GiveAwayForm />
                <HomeFooter />
                <ScrollBtn />
            </>
        );
    }
}
export default GiveAway;