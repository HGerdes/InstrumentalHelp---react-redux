import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { getInstruments } from "../../store/instruments"
import './instrumentPage.css';


const InstrumentsPage = () => {
    const dispatch = useDispatch();
    const { instrumentId } = useParams();

    useEffect(() => {
        dispatch(getInstruments())
    }, [dispatch])

    const instruments = useSelector(state => {
        return state.instrument.list;
    })

    return (
        <div className="instruments-container">
            {instruments.map((instrument) => {
                return(
                <div key={instrument.name} to={`/instrument/${instrument.id}`}>
                    <div className="instrumentName">{instrument.name}</div>
                </div>
                );
            })}
        </div>
    )
}

export default InstrumentsPage;
