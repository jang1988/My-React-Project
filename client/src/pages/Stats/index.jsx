import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import style from './Stats.module.css';
import { setParams, setStats } from '../../redux/slices/statsSlice';

const Stats = () => {
    function chengeValue(event) {
        setValue(event.target.value);
    }
    const dispatch = useDispatch();
    
    const [seasonValue, setSeasonValue] = React.useState(null);
    const [dateValue, setDateValue] = React.useState(null);
    const [startDateValue, setStartDateValue] = React.useState(null);
    const [endDateValue, setEndDateValue] = React.useState(null);
    const [postseasonValue, setPostseasonValue] = React.useState("1");
    const [value, setValue] = React.useState(1);

    const currentPage = 1;
    const page = `page=${currentPage}`;
    const seasons = seasonValue ? `&seasons[]=${seasonValue}` : '';
    const date = dateValue ? `&dates[]=${dateValue}` : '';
    const startDate = startDateValue ? `&start_date=${startDateValue}` : '';
    const endDate = endDateValue ? `&end_date=${endDateValue}` : '';
    const postseason = postseasonValue === 1 ? `&postseason=${false}` : `&postseason=${true}`;

    const fetchStats = React.useCallback(async () => {
        try {
            const { data } = await axios.get(
                `https://www.balldontlie.io/api/v1/stats?${page}${seasons}${date}${startDate}${endDate}${postseason}`,
            );
            dispatch(setStats(data));
            dispatch(setParams(data));

            console.log('data: ', data);
        } catch (error) {
            console.log('error: ', error);
        }
    }, [dispatch, page, seasons, date, startDate, endDate, postseason]);

    React.useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    return (
        <div className={style.root}>
            <div className={style.inputWrapper}>
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
            </div>

            <div className={style.inputWrapper}>
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

            <div className={style.inputWrapper}>
                <label htmlFor="date">
                    <b>Start date</b>
                </label>
                <input
                    type="date"
                    placeholder="Enter startDate"
                    onChange={(e) => setStartDateValue(e.target.value)}
                    name="startDate"
                    id="startDate"
                    autoComplete="on"
                    required
                />
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="endDate">
                    <b>End date</b>
                </label>
                <input
                    type="date"
                    placeholder="Enter endDate"
                    onChange={(e) => setEndDateValue(e.target.value)}
                    name="endDate"
                    id="endDate"
                    autoComplete="on"
                    required
                />
            </div>

            <div className={style.postseason}>
                <b>Postseason</b>

                <label htmlFor="OFF">OFF</label>
                <input
                    type="radio"
                    name="radio"
                    value="1"
                    checked={postseasonValue === '1' ? true : false}
                    onChange={chengeValue}
                />

                <label htmlFor="ON">ON</label>
                <input
                    type="radio"
                    name="radio"
                    value="2"
                    checked={postseasonValue === '2' ? true : false}
                    onChange={chengeValue}
                />
            </div>
        </div>
    );
};

export default Stats;
