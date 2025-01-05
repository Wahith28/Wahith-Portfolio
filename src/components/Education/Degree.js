import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"
import { useSelector } from "react-redux";

function Degree(props) {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Degree
            </h1>
            <div className={classes.degreeCard}>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{width:"75%"}}>
                            <h1 style={{ color: uiColor }}>{EducationData.collegeName},</h1> 
                            <h1 style={{ color: uiColor }}>{EducationData.universityName}</h1>   </div>
                                             
                            <h3 style={{ color: nonThemeColor, width:'25%', textAlign:'right' }}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        </div>

                        <div>
                            <h2 style={{ color: nonThemeColor }}>{EducationData.courseName}</h2>
                            <i>{EducationData.class}</i>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Degree;