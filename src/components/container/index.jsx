import React from 'react';


export default function Container({ children, styles }) {
    return (
        <body 
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#2aa703',
                margin: 'auto',
            }}
        >
            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    width: "90%",
                    backgroundColor: "#4fff57",
                    padding: "20px",
                    margin: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    color: "#000000",
                    ...styles,
                }}
            >
                {children}         
            </div>        
        </body>
    );
}