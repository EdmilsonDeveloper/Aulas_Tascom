import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from '../components';
import api from '../config/api';

export default function Home() {
    const [persons, setPersons] = useState([]);
        
    useEffect(() => {
        api
        .get()
        .then((response) => {
            setPersons(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <h1>Personagens</h1>

            <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-around",
              }}>
                {persons.map((person) => (
                    <Card
                        title={person.name}
                        subtitle={person.status}
                        image={person.image}
                        onClick={() => window.location.href = (`/about?id=${person.id}`)}
                    />
                ))}
            </div>

            <Button onClick={() => window.location.href = ""}>
                Previous Page
            </Button>

            <Button onClick={() => window.location.href = ""}>
                Next Page
            </Button>
            
        </Container>
        
    );
}