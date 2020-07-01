import React, {useEffect} from "react";
import {connect} from 'react-redux';

import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {filterData, searchSubj, setFilter, setPrice} from "../redux/actions/serachSubjects";
import './searchbar.css';


const SearchBar = ({data, setFilter, filterSubj, filterGrade, filterGenre, filterData, keyword, setPrice, price}) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        setPrice(price);
    };
    useEffect(() => {
        filterData(data, filterSubj, filterGenre, filterGrade, keyword);
    }, [filterSubj, filterGrade, filterGenre, keyword])

    const filter = (event, type) => {
        const filterValue = event.target.value;
        setFilter(filterValue, type);
    };


    return (

        <div className="search">
            <FormGroup>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center">
                    <Grid item xs={12} sm={3} md={2} lg={2}>
                        <FormControl>
                            <InputLabel id="subjects-label">Все предметы</InputLabel>
                            <Select
                                labelId="subjects-label"
                                id="subjects"
                                value={filterSubj}
                                onChange={(e) => filter(e, 'subject')}
                            >
                                <MenuItem value="default">
                                    <em>Все</em>
                                </MenuItem>
                                <MenuItem value='Алгебра'>Алгебра</MenuItem>
                                <MenuItem value='Английский язык'>Английский язык</MenuItem>
                                <MenuItem value='Биология'>Биология</MenuItem>
                                <MenuItem value='География'>География</MenuItem>
                                <MenuItem value='Геометрия'>Геометрия</MenuItem>
                                <MenuItem value='История'>История</MenuItem>
                                <MenuItem value='Литература'>Литература</MenuItem>
                                <MenuItem value='Математика'>Математика</MenuItem>
                                <MenuItem value='Обществознание'>Обществознание</MenuItem>
                                <MenuItem value='Окружающий мир'>Окружающий мир</MenuItem>
                                <MenuItem value='Робототехника'>Робототехника</MenuItem>
                                <MenuItem value='Русский язык'>Русский язык</MenuItem>
                                <MenuItem value='Физика'>Физика</MenuItem>
                                <MenuItem value='Химия'>Химия</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2} lg={2}>
                        <FormControl>
                            <InputLabel id="genres-label">Все жанры</InputLabel>
                            <Select
                                labelId="genres-label"
                                id="genres"
                                value={filterGenre}
                                onChange={(e) => filter(e, 'genre')}
                            >
                                <MenuItem value="default">
                                    <em>Все</em>
                                </MenuItem>
                                <MenuItem value='Демо'>Демо</MenuItem>
                                <MenuItem value='Задачник'>Задачник</MenuItem>
                                <MenuItem value='Подготовка к ВПР'>Подготовка к ВПР</MenuItem>
                                <MenuItem value='Подготовка к ЕГЭ'>Подготовка к ЕГЭ</MenuItem>
                                <MenuItem value='Рабочая тетрадь'>Рабочая тетрадь</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2} lg={2}>
                        <FormControl>
                            <InputLabel id="all-classes-open-select-label">Все классы</InputLabel>
                            <Select
                                labelId="all-classes-open-select-label"
                                id="all-classes-open-select"
                                value={filterGrade}
                                onChange={(e) => filter(e, 'grade')}
                            >
                                <MenuItem value="default">
                                    <em>Все</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                            </Select>

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2} lg={2}>
                        <FormControl>
                            <TextField id="standard-basic" label="Поиск" onChange={(e) => filter(e, 'search')}/>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={3} md={2} lg={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Рубли/Бонусы"
                        />
                    </Grid>
                </Grid>
            </FormGroup>
        </div>

    )
        ;
}


const mapStateToProps = (state) => {
    return (
        {
            data: state.searchReducer.data,
            filterSubj: state.searchReducer.filterSubj,
            filterGrade: state.searchReducer.filterGrade,
            filterGenre: state.searchReducer.filterGenre,
            keyword: state.searchReducer.keyword,
            price: state.searchReducer.price
        }
    );
}

export default connect(mapStateToProps, {filterData, searchSubj, setFilter, setPrice})(SearchBar);