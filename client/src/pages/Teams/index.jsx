import React, { useCallback } from 'react';
import axios from 'axios';
import TeamCard from '../../components/TeamCard/TeamCard';

import { useSelector, useDispatch } from 'react-redux';
import { setTeams, setParams } from '../../redux/slices/teamsSlice';
import Pagination from '../../components/Pagination/Pagination';

import style from './Teams.module.css';
import Skeleton from '../../components/Skeletons/TeamsSkeleton';

const Home = () => {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    const teamsNBA = useSelector((state) => state.teamsNBA.teams);
    const params = useSelector((state) => state.teamsNBA.params);

    const [currentPage, setCurrentPage] = React.useState(1);

    const fetchTeams = useCallback(async () => {
        setLoading(true);
        try {
            const resTeams = await axios.get(
                `https://www.balldontlie.io/api/v1/teams?page=${currentPage}`,
            );
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

        window.scroll(0, 0)
    }, [fetchTeams]);

    return (
        <div className={style.root}>
            <div className={style.teamsNBA}>
                {/* {teamsNBA.map((team) => loading ? <Skeleton /> : <TeamCard key={team.id} team={team} />)} */}
                {loading
                    ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
                    : teamsNBA.map((team) => <TeamCard key={team.id} team={team} />)}
            </div>
            <Pagination params={params} onClickPagin={(number) => setCurrentPage(number)} />
        </div>
    );
};

export default Home;
