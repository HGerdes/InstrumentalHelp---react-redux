import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getInstrumentDetail } from "../../store/instruments"

const InstrumentDetailPage = () => {
    const dispatch = useDispatch();
    const {instrumentId} = useParams();
    const history = useHistory();

    const currentUser = useSelector(state => state.session.user);

    const instrument = useSelector(state => {
        return state.instruments.getInstrumentDetail;
    })

    console.log(instrument)

    return (
        <div className="Instrument Details">
            <p>Instrument Name: </p> {instrument.name}
        </div>
    )
}

export default InstrumentDetailPage;
