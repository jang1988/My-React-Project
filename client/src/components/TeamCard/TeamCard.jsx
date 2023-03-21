import React from 'react';
import style from './TeamCard.module.css';

const TeamCard = ({ team }) => {
    return (
        <div className={style.card}>
            <h4>{team.full_name}</h4>
            <div>city: {team.city}</div>
            <div className={style.cardInner}>
                <p>{team.conference}</p>
                <p>{team.division}</p>
            </div>
            <div>name: {team.name}</div>
            <div>{team.abbreviation}</div>
        </div>
    );
};

export default TeamCard;
