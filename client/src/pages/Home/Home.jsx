import React, { useCallback } from 'react';
import axios from 'axios';
import TeamCard from '../../components/TeamCard/TeamCard';

import { useSelector, useDispatch } from 'react-redux';
import { setTeams, setParams } from '../../redux/slices/teamsSlice';
import Pagination from '../../components/Pagination/Pagination';

import style from './Home.module.css'

const Home = () => {
    const [loading, setLoading] = React.useState(true);
    console.log('loading: ', loading);
    const dispatch = useDispatch();

    const teamsNBA = useSelector((state) => state.teamsNBA.teams);
    const params = useSelector((state) => state.teamsNBA.params);
    
    const [currentPage, setCurrentPage] = React.useState(1)

    const fetchTeams = useCallback(async () => {
        setLoading(true);
        try {
            const resTeams = await axios.get(`https://www.balldontlie.io/api/v1/teams?page=${currentPage}`);
            dispatch(setTeams(resTeams.data.data));
            dispatch(setParams(resTeams.data.meta));
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, currentPage]);

    React.useEffect(() => {
        fetchTeams();
    }, [fetchTeams]);

    return (
        <div className={style.root}>
            <div className={style.teamsNBA}>
                {teamsNBA.map((team) => {
                    return <TeamCard key={team.id} team={team} />;
                })}
            </div>
            <Pagination params={params} onClickPagin={number => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;
