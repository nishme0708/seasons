import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, its cold',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    let season = 'summer';
    if (month > 2 && month < 9) {
        if (lat <= 0) {
            season = 'winter';
        }
    } else {
        if (lat > 0) {
            season = 'winter';
        }
    }
    return season;
};
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`container ${season}`}>
            <i className={`${iconName} icon massive left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive right`} />
        </div>
    );
};

export default SeasonDisplay;
