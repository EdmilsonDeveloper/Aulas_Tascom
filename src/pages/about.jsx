import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "../components";
import axios from "axios";
export default function About() {
    const navigate = useNavigate();
    const [persons, setPersons] = useState([]);
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            setPersons(response.data);
        })
        .catch((err) => console.log(err));
    });
    return (
        <>
                <Container key={persons.id}>
                    <img src={persons.image} alt={persons.name} 
                        style={{ width: "196px", height: "265px", borderRadius: "10px" }}/>
                    <div style={{width: "50%"}}>
                        <h1>{persons.name}</h1>
                        <h4>{persons.status}</h4>
                        <h4>{persons.species}</h4>
                        <h4>{persons.gender}</h4>
                        {/* <h4>{persons.origin}</h4>
                        <h4>{persons.location}</h4>
                        <p>{persons.episode}</p> */}
                        <Button onClick={() => navigate(-1)}>Voltar</Button>
                    </div>
                </Container>
        </>         
    );
}
