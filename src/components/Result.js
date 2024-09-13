import dayjs from "dayjs";
import React from "react";

function countWorkingDays(startDate, endDate) {
    let currentDate = new Date(startDate);
    const end = new Date(endDate);
    let workingDaysCount = 0;

    const holidays = ['2024-09-09', '2024-09-14', '2024-09-16', '2024-09-23', '2024-09-24', '2024-09-25', '2024-09-26', '2024-09-27', '2024-09-28', '2024-10-02', '2024-10-07', '2024-10-08', '2024-10-09', '2024-10-10', '2024-10-11', '2024-10-12', '2024-10-31', '2024-11-09', '2024-11-15', '2024-12-02', '2024-12-03', '2024-12-04', '2024-12-05', '2024-12-06', '2024-12-07', '2024-12-09', '2024-12-10', '2024-12-11', '2024-12-12', '2024-12-13', '2024-12-14', '2024-12-15', '2024-12-16', '2024-12-17', '2024-12-18', '2024-12-19', '2024-12-20', '2024-12-21', '2024-12-22', '2024-12-23', '2024-12-24', '2024-12-25', '2024-12-26', '2024-12-27', '2024-12-28'];

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
            {pb>0 ? <h2 className="at-det">(your attendance will be 75% after taking above number of leaves)</h2> : ''}
        </div>
    );
}