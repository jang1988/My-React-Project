import React, { useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setPlayers } from '../../redux/slices/playersSlice';
import PlayersCadr from '../../components/PlayerCard';

import Skeleton from '../../components/Skeletons/PlayersSkeleton';

import style from './Players.module.css';

const Players = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(true);
    console.log('loading: ', loading);

    const { players, params } = useSelector((state) => state.playersNBA);
    console.log('params: ', params)

    const fetchPlayers = useCallback(async () => {
        setLoading(true);
        try {
            const resPlayers = await axios.get(`https://www.balldontlie.io/api/v1/players`);
            dispatch(setPlayers(resPlayers.data.data));
            dispatch(setParams(resPlayers.data.meta));
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    React.useEffect(() => {
        fetchPlayers();
    }, [fetchPlayers]);

    return (
        <div className={style.root}>
            <div className={style.players}>
                {loading 
                ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
                : players.map((player) => <PlayersCadr key={player.id} player={player}/>
                )}
            </div>
        </div>
    );
};

export default Players;
