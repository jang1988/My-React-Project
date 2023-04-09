import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

import style from './PageTeam.module.css';


const PageTeam = () => {
    const params = useParams();

    const [team, setTeam] = React.useState({});
    console.log('team: ', team)

    async function fetchTeam(id) {
        const { data } = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`);
        setTeam(data);
    }

    React.useEffect(() => {
        fetchTeam(params.id);
    }, [params.id]);

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

export default PageTeam;
