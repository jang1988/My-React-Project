import React from 'react';
import axios from 'axios';

const Home = () => {
    const [teamsNBA, setTeamsNBA] = React.useState([]);
    let params = React.useRef([]);
    console.log('params: ', params);

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
        <div>
            {teamsNBA.map((team) => {
                return (
                    <div key={team.id}>
                        <h1>{team.full_name}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
