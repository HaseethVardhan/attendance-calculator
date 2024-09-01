import React from 'react';

export default function Form(props){

    return(
        <form onSubmit={props.handleSubmit}>
            <div className="form-elem">
                <label htmlFor="totalclass">Total Classes</label>
                <input type="number" id="totalclass" name="totalclass" onChange={props.handleChange} value={props.attdt.totalclass}></input>
            </div>
            <div className="form-elem">
                <label htmlFor="totalclassatt">Total Classes Attended</label>
                <input type="number" id="totalclassatt" name="totalclassatt" onChange={props.handleChange} value={props.attdt.totalclassatt}></input>
            </div>
            <div className="form-elem">
                <label htmlFor="atttill">Attendance till</label>
                <input type="date" id="atttill" name="atttill" onChange={props.handleChange} value={props.attdt.atttill}></input>
            </div>
            <div className="form-elem">
                <button>Submit</button>
            </div>
        </form>
    );
}