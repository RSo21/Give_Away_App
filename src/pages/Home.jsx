import React, { Component } from 'react';

import HomeHeader from '../components/HomeHeader';
import HomeThreeColumns from '../components/HomeThreeColumns';
import HomeEasySteps from '../components/HomeEasySteps';
import HomeFourColumns from '../components/HomeFourColumns';
import HomeDonateThings from '../components/HomeDonateThings';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeWhomWeHelp from '../components/HomeWhomWeHelp';
import HomeFooter from '../components/HomeFooter';
import ScrollBtn from '../components/ScrollBtn'


class Home extends Component{
    render(){
        return(
            <>
                <HomeHeader />
                <HomeThreeColumns />
                <HomeEasySteps />
                <HomeFourColumns />
                <HomeDonateThings />
                <HomeAboutUs />
                <HomeWhomWeHelp />
                <HomeFooter />
                <ScrollBtn />
            </>
        );
    }
}
export default Home;