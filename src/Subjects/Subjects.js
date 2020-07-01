import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';

import {searchSubj, filterData} from "../redux/actions/serachSubjects";
import './subjects.css';

const Subjects = ({filteredData,searchSubj, price}) => {
    let renderSubjects;

    useEffect(() => {
        searchSubj();
    },[]);


    if (filteredData.length > 0 ) {
        renderSubjects = filteredData.map(item => {
            let gradeString;
            const imgUrl = `https://www.imumk.ru/svc/coursecover/${item.courseId}`;
            const gradeArr = item.grade.split(';');
            if(gradeArr.length > 1) {
                gradeString = `${gradeArr[0]}-${gradeArr[gradeArr.length - 1]} классы`;
            }else {
                gradeString = `${gradeArr[0]} класс`;
            }

            return(
                <Grid item xs={12} sm={4} md={3} lg={2} key={item.courseId} >
                <div className="subjects__item" >
                    <div className="subjects__img">
                        <img src={imgUrl} alt=""/>
                    </div>
                    <div className="subjects__info">
                        <div className="subjects__title">
                            {item.subject}
                        </div>
                        <div className="subjects__grade">
                            {gradeString}
                        </div>
                        <div className="subjects__genre">
                            {item.genre}
                        </div>
                        <div className="subjects__more">
                            <a href="#">Подробнее</a>
                        </div>
                        <div className="subjects__btn">
                            <a href="#" >
                                {price ? `${item.price } руб.` : `${item.priceBonus} баллов.`}
                            </a>
                        </div>
                    </div>

                </div>
                </Grid>
            );
        })
    }

    return(
        <div className="subjects">
            <Grid container spacing={3} >
                {(filteredData.length > 0) ? renderSubjects : 'Курсов нет'}
            </Grid>

        </div>
    );
}

const mapStateToProps = (state) => {

    return{
        price: state.searchReducer.price,
        filteredData: state.searchReducer.filteredData
    }
}

export default connect(mapStateToProps, {searchSubj, filterData})(Subjects);