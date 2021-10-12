import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
        return state.instruments.list;
        //  return state.instruments[instrumentId]
        // return state.instruments.list.map(instrumentId => state.instruments[instrumentId])
    })

    return (
        <div className="instruments-container">
            {instruments?.map((instrument) => {
                return(
                <div key={instrument.name}>
                <NavLink className="instruments" to={`/instrument/${instrument.id}`}>
                    <div className="instrumentName">Instrument: {instrument.name}</div>
                </NavLink>
                </div>
                );
            })}
        </div>
        )
}

export default InstrumentsPage;
