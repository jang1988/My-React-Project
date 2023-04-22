import React from 'react';

import style from './InputStats.module.css';

const InputStats = ({ setSeasonValue, setDateValue, setStartDateValue, setEndDateValue, value, chengeValue }) => {
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
                    checked={value === '1' ? true : false}
                    onChange={chengeValue}
                />

                <label htmlFor="ON">ON</label>
                <input
                    type="radio"
                    name="radio"
                    value="2"
                    checked={value === '2' ? true : false}
                    onChange={chengeValue}
                />
            </div>
        </div>
    );
};

export default InputStats;
