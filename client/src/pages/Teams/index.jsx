import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamsThunk } from '../../redux/slices/teamsSlice';
import Pagination from '../../components/Pagination/Pagination';

import style from './Teams.module.css';
import Skeleton from '../../components/Skeletons/TeamsSkeleton';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    const { status, params, teams } = useSelector((state) => state.teamsNBA);

    const [currentPage, setCurrentPage] = React.useState(1);

    // const fetchTeams = useCallback(async () => {
    //     try {
    //         dispatch(fetchTeamsThunk({ currentPage }));
    //     } catch (error) {
    //         console.log('error: ', error);
    //     }
    // }, [dispatch, currentPage]);

    React.useEffect(() => {
        // fetchTeams();
        dispatch(fetchTeamsThunk({ currentPage }));

        window.scroll(0, 0);
    }, [dispatch, currentPage]);

    return (
        <div className={style.root}>
            <div className={style.teamsNBA}>
                {/* {teamsNBA.map((team) => loading ? <Skeleton /> : <TeamCard key={team.id} team={team} />)} */}
                {status === 'loading'
                    ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
                    : teams.map((team) => (
                          <Link to={`/team/${team.id}`} key={team.id}>
                              <TeamCard team={team} />
                          </Link>
                      ))}
            </div>
            <Pagination params={params} onClickPagin={(number) => setCurrentPage(number)} />
        </div>
    );
};

export default Home;
