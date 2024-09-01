import dayjs from "dayjs";
import React from "react";

function countWorkingDays(startDate, endDate) {
    let currentDate = new Date(startDate);
    const end = new Date(endDate);
    let workingDaysCount = 0;

    const holidays = ['2024-09-05'];

    while (currentDate <= end) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && !holidays.includes(currentDate.toISOString().split('T')[0])) {
            workingDaysCount++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDaysCount;
}


export default function Result(props){

    let dattt = props.attdt.atttill;
    let wd = countWorkingDays(dayjs(), props.attdt.atttill);
    let tc = parseInt(props.attdt.totalclass) + (wd*7);
    let tca =  parseInt(props.attdt.totalclassatt) + (wd*7);
    let attper = ((tca/tc)*100).toFixed(2);
    let pb = Math.floor(tca-((75/100)*tc));
    
    // const [color, setColor] = React.useState('#fd5c63');

    let color = '#fd5c63'
    // React.useEffect(()=>{
    // },[attper])

    let str = '';
    if(attper<75){
        str = "Danger Zone";
    }else if(attper>=75 && attper<80){
        str = "Alert Zone";
        color = '#FEBE10'
    }else{
        str = "Safe Zone";
        color = '#32de84'
    }

    pb = pb<0 ? 0: pb;


    return(
        <div className="res-con" style={{backgroundColor: color}}>
            <h1>{str}</h1>
            <h2 className="at-det">Attendance on {dattt} : {attper || ''}%</h2>
            {pb>0 ? <h2 className="at-det">Maximum Leaves can be taken : {pb} periods or {Math.floor(pb/7)} days</h2> : ''}
            {pb>0 ? <h2 className="at-det">(your attendance will be 75% after bunking above number of periods)</h2> : ''}
        </div>
    );
}