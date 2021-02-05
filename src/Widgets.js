import React from 'react';
import './Widgets.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets___articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets___articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle('HOD Learning teaches tech skills', 'Skillup Africa - 10,589 readers')}
            {newsArticle('The Future of Cryptocurrency', 'Trending topics - 4,769 readers')}
            {newsArticle('Keeping healthy and happy', 'Health is Wealth - 6,461 readers')}
            {newsArticle('Preparing for Africa\'s century', 'Invest in Africa - 3,635 readers')}
            {newsArticle('Moving toward a sustainable future', 'Going Green - 2,824 readers')}
            {newsArticle('Breaking barriers in technology', 'Tech frontiers - 7,976 readers')}
        </div>
    )
}

export default Widgets
