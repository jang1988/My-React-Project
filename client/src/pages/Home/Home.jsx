import React from 'react';
import axios from 'axios';
import TeamCard from '../../components/TeamCard/TeamCard';

const Home = () => {
    const [teamsNBA, setTeamsNBA] = React.useState([]);
    console.log('teamsNBA: ', teamsNBA)
    let params = React.useRef([]);

    React.useEffect(() => {
        axios
            .get('https://www.balldontlie.io/api/v1/teams?page=1')
            .then((response) => {
                setTeamsNBA(response.data.data);
                params.current = response.data.meta;
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {teamsNBA.map((team) => {
                return (
                    <TeamCard key={team.id} team={team}/>
                );
            })}
        </div>
    );
};

export default Home;
