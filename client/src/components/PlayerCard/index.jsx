import React from 'react';
import style from './PlayerCard.module.css'

const PlayersCadr = ({player}) => {

    return (
        <div className={style.root}>
            <b>PLAYER</b>
            <p>{player.first_name}</p>
            <p>{player.last_name}</p>
            <p>{player.position}</p>
            <p>{player.height_feet}</p>
            <p>{player.height_inches}</p>
            <div className={style.team}>
                <b>TEAM</b>
                <p>{player.team.full_name}</p>
                <p>{player.team.abbreviation}</p>
            </div>
        </div>
    );
};

export default PlayersCadr;
