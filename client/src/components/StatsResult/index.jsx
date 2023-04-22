import React from 'react';

import style from './StatsResult.module.css'

const StatsResult = ({stats}) => {
    return (
        <div className={style.root}>
           <b>RESULT</b>

            <div>
                GAME {stats.game.id}
                <p>date {stats.game.date}</p>
                <p>home_team_id {stats.game.home_team_id}</p>
                <p>home_team_score {stats.game.home_team_score}</p>
                <p>id {stats.game.id}</p>
                <p>period {stats.game.period}</p>
                <p>postseason {stats.game.postseason}</p>
                <p>season {stats.game.season}</p>
                <p>status {stats.game.status}</p>
                <p>time {stats.game.time}</p>
                <p>visitor_team_id {stats.game.visitor_team_id}</p>
                <p>visitor_team_score {stats.game.visitor_team_score}</p>
            </div>

            <div>
                PLAYER {stats.player.id}
                <p>first_name {stats.player.first_name}</p>
                <p>height_feet {stats.player.height_feet}</p>
                <p>height_inches {stats.player.height_inches}</p>
                <p>id {stats.player.id}</p>
                <p>last_name {stats.player.last_name}</p>
                <p>position {stats.player.position}</p>
                <p>team_id {stats.player.team_id}</p>
                <p>weight_pounds {stats.player.weight_pounds}</p>
            </div>

            <div>
                STATS
                <p>ast {stats.ast}</p>
                <p>blk {stats.blk}</p>
                <p>dreb {stats.dreb}</p>
                <p>fg3_pct {stats.fg3_pct}</p>
                <p>fg3a {stats.fg3a}</p>
                <p>fg3m {stats.fg3m}</p>
                <p>fg_pct {stats.fg_pct}</p>
                <p>fga {stats.fga}</p>
                <p>fgm {stats.fgm}</p>
                <p>ft_pct {stats.ft_pct}</p>
                <p>fta {stats.fta}</p>
                <p>ftm {stats.ftm}</p>
                
            </div>
        </div>
    );
};

export default StatsResult;
