import React from 'react';

import style from './Stats.module.css';
import axios from 'axios';

const Stats = () => {
    const [mainState, setMainState] = React.useState({});
    const [seasonValue, setSeasonValue] = React.useState(null);
    const [dateValue, setDateValue] = React.useState(null);
    


    const currentPage = 1;
    const page = `page=${currentPage}`;
    const seasons = seasonValue ? `&seasons[]=${seasonValue}` : '';
    const date = dateValue ? `&dates[]=${dateValue}` : '';

    // const startDate = `&start_date=${'2023-01-01'}`;
    // const endDate = `&end_date=${'2023-01-02'}`;
    // const player = `&player_ids[]=${1}`;
    // const game = `&game_ids[]=${1}`;
    // const postseason = `&postseason=${true}`;

    const fetchStats = React.useCallback(async () => {
        const { data } = await axios.get(`https://www.balldontlie.io/api/v1/stats?${page}${seasons}${date}`);
        setMainState(data);
    }, [page, seasons, date]);

    React.useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    return (
        <div className={style.root}>
            <label htmlFor="seasons">
                <b>Seasons</b>
            </label>
            <input
                type="number"
                placeholder="Enter Seasons"
                onChange={(e) => setSeasonValue(e.target.value)}
                name="seasons"
                id="seasons"
                autoComplete="on"
                required
            />

            <label htmlFor="date">
                <b>Date</b>
            </label>
            <input
                type="date"
                placeholder="Enter Date"
                onChange={(e) => setDateValue(e.target.value)}
                name="date"
                id="date"
                autoComplete="on"
                required
            />
        </div>
    );
};

export default Stats;
