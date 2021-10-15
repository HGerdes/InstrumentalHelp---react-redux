import {useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteInstrument } from "../../store/instruments";

function DeleteInstrument() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    console.log("id============", id)



    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteInstrument(id));
        history.push("/instruments");
    }

    return (
        <form className="deleteInstrument" onSubmit={onSubmit}>
            <button type="submit">delete????</button>
            <div>yo test</div>
        </form>
    )
}

export default DeleteInstrument;
