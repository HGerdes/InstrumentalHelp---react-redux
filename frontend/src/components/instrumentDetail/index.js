import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, NavLink } from 'react-router-dom';
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

    let manufact;
    let type;
    let showEditForm;
    if (instrumentDetail) {
        const instManufacturer = (instrumentDetail.manufacturerId) - 1;
        manufact = manufacturerTypes[instManufacturer].name;

        const instType = (instrumentDetail.typeId) - 1;
        type = instrumentTypes[instType].type;

        if (currentUser && (currentUser.id === instrumentDetail.userId)) {
            showEditForm = true;
        }
    }

    useEffect(() => {
        dispatch(getInstrumentDetail(uniqueInstrumentId))
    }, [dispatch])

    const {pathname} = history.location
    const uniqueInstrumentId = pathname.split("/")[2]

    return (
        <div className="Instrument Details">
            <div className="instrumentName">Instrument Name: {instrumentDetail?.name}</div>
            <div className="instrumentManufacturer">Instrument Manufacturer: {manufact}</div>
            <div className="instrumentType">Instrument Type: {type}</div>
            <div className="instrumentName">Instrument Description: {instrumentDetail?.description}</div>
            <div className="editFormButton">
                {(showEditForm) && (
                    <div className="buttons">
                        <NavLink to={`/instruments/${uniqueInstrumentId}/edit`}>
                            <button type="button">edit</button>
                        </NavLink>

                        <NavLink to={`/instruments/${uniqueInstrumentId}/delete`}>
                            <button>delete</button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InstrumentDetailPage;
