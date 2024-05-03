import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "../components";
import api from "../config/api";

export default function About() {
    const [persons, setPersons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api
        .get()
        .then((response) => {
            setPersons(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            <Container>
                <img src={persons.image} alt={persons.name} 
                    style={{ width: "196px", height: "265px", borderRadius: "10px" }}/>
                <div style={{width: "50%"}}>
                    <h1>{persons.name}</h1>
                    <h4>{persons.status}</h4>
                    <h4>{persons.species}</h4>
                    <h4>{persons.gender}</h4>
                    <h4>{persons.origin}</h4>
                    <h4>{persons.location}</h4>
                    <p>{persons.episode}</p>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </Container>
        </div>
            
    );
}