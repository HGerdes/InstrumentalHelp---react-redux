import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteInstrument } from "../../store/instruments";

function DeleteInstrument() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteInstrument(id));
        history.push("/instruments");
    }

    return (
        <form className="deleteInstrument" onSubmit={onSubmit}>
            <button type="submit">confirm delete</button>
        </form>
    )
}

export default DeleteInstrument;
