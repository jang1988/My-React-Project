import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import style from './Stats.module.css';
import { setParams, setStats } from '../../redux/slices/statsSlice';
import InputStats from '../../components/InputStats';
import StatsResult from '../../components/StatsResult';
import Pagination from '../../components/Pagination/Pagination';

const Stats = () => {
    const dispatch = useDispatch();

    const { stats, params } = useSelector((state) => state.stats);
    console.log('stats: ', stats);

    const [seasonValue, setSeasonValue] = React.useState(null);
    const [dateValue, setDateValue] = React.useState(null);
    const [startDateValue, setStartDateValue] = React.useState(null);
    const [endDateValue, setEndDateValue] = React.useState(null);
    const [value, setValue] = React.useState('1');
    const [currentPage, setCurrentPage] = React.useState(1);

    const page = `page=${currentPage}`;
    const seasons = seasonValue ? `&seasons[]=${seasonValue}` : '';
    const date = dateValue ? `&dates[]=${dateValue}` : '';
    const startDate = startDateValue ? `&start_date=${startDateValue}` : '';
    const endDate = endDateValue ? `&end_date=${endDateValue}` : '';
    const postseason = value === '1' ? `` : `&postseason=${true}`;

    function chengeValue(event) {
        setValue(event.target.value);
    }

    const fetchStats = React.useCallback(async () => {
        try {
            const { data } = await axios.get(
                `https://www.balldontlie.io/api/v1/stats?${page}${seasons}${date}${startDate}${endDate}${postseason}`,
            );
            dispatch(setStats(data));
            dispatch(setParams(data));
        } catch (error) {
            console.log('error: ', error);
        }
    }, [dispatch, page, seasons, date, startDate, endDate, postseason]);

    React.useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    return (
        <div className={style.root}>
            <InputStats
                setSeasonValue={setSeasonValue}
                setDateValue={setDateValue}
                setStartDateValue={setStartDateValue}
                setEndDateValue={setEndDateValue}
                value={value}
                chengeValue={chengeValue}
            />

            <div className={style.stats}>
                {stats.map((game) => {
                    return <StatsResult key={game.id} stats={game}/>;
                })}
            </div>

            <Pagination params={params} onClickPagin={(number) => setCurrentPage(number)} />

        </div>
    );
};

export default Stats;
