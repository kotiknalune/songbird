import React from 'react';
import { appConfig as config} from '../../config/appConfig';


const QuizBlock = () => {
    const { classes }: typeof config = config;
    return (
        <div className = {classes.default_container}>
        </div>
    )
};

export default QuizBlock;

 