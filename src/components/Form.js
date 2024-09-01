export default function Form(){
    return(
        <form>
            <div className="form-elem">
                <label htmlFor="totalclass">Total Number of Classes</label>
                <input type="number" id="totalclass" name="totalclass"></input>
            </div>
            <div className="form-elem">
                <label htmlFor="totalclassatt">Total Number of Classes Attended</label>
                <input type="number" id="totalclassatt" name="totalclassatt"></input>
            </div>
            <div className="form-elem">
                <label htmlFor="atttill">Attendance till</label>
                <input type="date" id="atttill" name="atttill"></input>
            </div>
            <div className="form-elem">
                <button>Submit</button>
            </div>
        </form>
    );
}