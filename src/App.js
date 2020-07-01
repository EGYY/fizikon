import React from 'react';
import Container from '@material-ui/core/Container';

import SearchBar from "./searchBar/searchBar";
import Subjects from "./Subjects/Subjects";

import './App.css';

function App() {

    return (
        <div className="wrapper">
            <Container maxWidth="lg">
                <SearchBar/>
                <Subjects/>
            </Container>

        </div>
    );
}


export default App;
