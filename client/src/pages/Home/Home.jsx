import React, { useCallback } from 'react';
import axios from 'axios';
import TeamCard from '../../components/TeamCard/TeamCard';

import { useSelector, useDispatch } from 'react-redux'
import { setTeams,setParams } from '../../redux/slices/teamsSlice';

const Home = () => {
    const [loading, setLoading] = React.useState(true)
    console.log('loading: ', loading)
    const dispatch = useDispatch()

    const teamsNBA = useSelector((state) => state.teamsNBA.teams)
    const params = useSelector((state) => state.teamsNBA.params)
    console.log('params: ', params)

    

    const fetchTeams = useCallback(async () => {
        setLoading(true)
        try {
            const resTeams = await axios.get(`https://www.balldontlie.io/api/v1/teams?page=1`);
            dispatch(setTeams(resTeams.data.data))
            dispatch(setParams(resTeams.data.meta))
        } catch (error) {
            console.log('error: ', error)
        } finally {
            setLoading(false)
        }
    }, [dispatch]);

    React.useEffect(() => {
        fetchTeams();
    }, [fetchTeams]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {teamsNBA.map((team) => {
                return <TeamCard key={team.id} team={team} />;
            })}
        </div>
    );
};

export default Home;
