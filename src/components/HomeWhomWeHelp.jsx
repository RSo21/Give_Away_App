import React, {Component} from 'react';
import Decoration from '../assets/Decoration.svg';
import {organizations} from '../api/organizations.js'

//db from organizations.js
class WhomWeHelp extends Component{
    render(){
        //const {foundation} = this.props;
        const {organization} = this.props;
    
    return(
        <>
        <div className = "whom-we-help-choice-div">
            <div className = "whom-help-choice-name-and-donation">
                {/* <p>{foundation.name}</p>
                <span>{foundation.donations}</span> */}
                <p className = "whom-we-help-name">{organization.name}</p>
                <span>{organization.donations}</span>
            </div>
            {/* <p>{foundation.mission}</p> */}
            <p className = "whom-we-help-mission">{organization.mission}</p>
        </div>    
        </>
        )
    }
};

class HomeWhomWeHelp extends Component {
    state = {
        currentPage: 1,
        itemsPerPage: 4,
        buttons: 4,
        organizations: {organizations}
    }

    // componentDidMount() {
    //     this.getData('foundations')
    // }

    handleClick = (e, i) =>{
        this.setState({
            currentPage: i,
        })
    }

    // changeFundation = (e) => {
    //     this.getData(e.target.id)
    // }

    // getData = (fund) => {
    //     fetch(`http://localhost:3005/${fund}`)
    //     .then(res => res.json())
    //     .then(fundations => {
    //         this.setState({ fundations })
    //     })
    // }

    showButtonsNumbers = () => {
        const pageNumbers = [];

        for(let i = 1; i <= this.state.buttons; i++){
            const element = <li key = {i}
                                onClick = {(e)=> this.handleClick(e, i)}
                                className={this.state.currentPage === i ? "active" : ""}
                                >
                                {i}
                                </li>
            pageNumbers.push(element);
        }
        return pageNumbers
    }


    render(){ 

        const {currentPage, itemsPerPage} = this.state

        const indexOfLast = currentPage * itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        const organizationsItems = organizations.slice(indexOfFirst, indexOfLast);

        console.log(organizationsItems);

        return(
            <div className = "whom-we-helps" id = "help">
                <div className = "whom-we-helps-text">
                    <p className = "help">Whom we helps?</p>
                    <img className = "decoration" src = {Decoration} alt = "decoration"/> 
                </div>
                <div className = "whom-we-help-btn">
                    {/* <button id="foundations" onClick={this.changeFundation}>Fundation</button>
                    <button id="organizations" onClick={this.changeFundation}>Non-governmental Organizations</button>
                    <button id="locallCollections" onClick={this.changeFundation}>Local collections</button> */}
                </div>
                <div>
                    <p className = "whom-we-helps-desc">In our database you will find a list of foundations, organizations and local collections we help. You can check what they do, who they help and what they need.</p>
                </div>
                <div className = "whom-we-help-choice">
                     {/* {foundationsItems.map(foundation => <WhomWeHelp key={foundation.name} foundation={foundation}/>)} */}
                     {organizationsItems.map(organization => <WhomWeHelp key={organization.name} organization={organization}/>)}
                </div>
                <div className = "pagesNumbers">
                    {this.showButtonsNumbers()}
                </div>
            </div>
       )
    }
}

export default HomeWhomWeHelp;