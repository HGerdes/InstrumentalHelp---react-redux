import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getInstrumentDetail } from "../../store/instruments"
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"

const InstrumentDetailPage = () => {
    const dispatch = useDispatch();
    const {instrumentId} = useParams();
    const history = useHistory();

    const currentUser = useSelector(state => state.session.user);

    const instrumentDetail = useSelector(state => {
        return state.instruments.getInstrumentDetail;
    })

    const instrumentTypes = useSelector(state => {
        return state.instruments.getTypes;
    });

    useEffect(() => {
        dispatch(getInstrumentTypes());
    }, [dispatch]);

    const manufacturerTypes = useSelector(state => {
        return state.instruments.getManufacturers;
    });

    useEffect(() => {
        dispatch(getInstrumentManufacturers());
    }, [dispatch]);


    if (instrumentDetail) {
        const instManufacturer = instrumentDetail.manufacturerId;
        const manuFact = Object.keys(manufacturerTypes);
        console.log(manuFact)

    }


    console.log("instrumentDetail:   ", instrumentDetail)

    useEffect(() => {
        dispatch(getInstrumentDetail(uniqueInstrumentId))
    }, [dispatch])

    const {pathname} = history.location
    const uniqueInstrumentId = pathname.split("/")[2]

    return (
        <div className="Instrument Details">
            <div className="instrumentName">Instrument Name: {instrumentDetail?.name}</div>
            <div className="instrumentManufacturer">Instrument Type: {instrumentDetail?.typeId}</div>
            <div className="instrumentName">Instrument Name: {instrumentDetail?.name}</div>
            <div className="instrumentName">Instrument Name: {instrumentDetail?.name}</div>
        </div>
    )
}

export default InstrumentDetailPage;
