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
        return state.instruments.getAllInstruments;
        //  return state.instruments[instrumentId]
        // return state.instruments.list.map(instrumentId => state.instruments[instrumentId])
    })

    console.log(instruments)

    return (
        <div className="instruments-container">
            {instruments?.map(instrument => (
                <div key={instrument.id}>
                <NavLink to={`/instruments/${instrument.id}`} key={`${instrument.id}`} className="instruments">
                    <div className="instrumentName">Instrument: {instrument.name}</div>
                </NavLink>
                </div>
            ))}

        </div>
        )
}

export default InstrumentsPage;
