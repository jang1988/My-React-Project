import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const PageTeam = () => {
    const params = useParams();

    const [team, setTeam] = React.useState({});
    console.log('team: ', team)

    async function fetchTeam(id) {
        const { data } = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`);
        setTeam(data);
    }

    React.useEffect(() => {
        fetchTeam(params.id);
    }, [params.id]);

    return (
        <div>
            <h4>title</h4>
            <div>city: </div>
            <div>
                <p>{}</p>
                <p>{}</p>
            </div>
            <div>name: {}</div>
            <div>{}</div>
        </div>
    );
};

export default PageTeam;
