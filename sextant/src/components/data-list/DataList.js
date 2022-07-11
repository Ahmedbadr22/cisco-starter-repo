import "./data-list-style.css";
import IPDisplayer from "../ip-displayer/IPDisplayer";

const DataList = () => {
    return (
        <div className="data-list">
            <h3>Data List</h3>
            <IPDisplayer ipV={4} />
            <IPDisplayer ipV={6} />
        </div>
    );
};

export default DataList;