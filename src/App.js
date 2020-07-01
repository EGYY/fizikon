import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {searchSubj} from "./redux/actions/serachSubjects";
import SearchBar from "./searchBar/searchBar";
import Subjects from "./Subjects/Subjects";
import Grid from '@material-ui/core/Grid';
import './App.css';

function App({data, searchSubj}) {

  return (
    <div className="wrapper">
        <Container maxWidth="lg">
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}>
                <Grid item xs={12}>
                    <SearchBar/>
                </Grid>
                <Grid item xs={12}>
                    <Subjects/>
                </Grid>
            </Grid>
        </Container>

    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        data: state.searchReducer.data
    };
}

export default connect(mapStateToProps, {searchSubj})(App);
