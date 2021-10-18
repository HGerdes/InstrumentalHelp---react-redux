import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInstruments } from "../../store/instruments"
import './instrumentPage.css';
import "./rpl.png";


const InstrumentsPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getInstruments())
    }, [dispatch])

    const instruments = useSelector(state => {
        return state.instruments.getAllInstruments;
    })

    const [avg, setAvg] = useState(1);

    useEffect(() => {
        let ratings = {}

        if (instruments) {
            instruments.forEach(instrument => {
                let total = 0;
                instrument["Reviews"].forEach(review => {
                    if (!review.rating) {
                        review.rating = 1;
                    }
                    total += review.rating;
                })
                ratings[instrument.id] = (total / Object.values(instrument["Reviews"]).length).toFixed(1);
            })
        }

        for (let [rate, rating] of Object.entries(ratings)) {
            if (isNaN(rating)) {
                ratings[rate] = "5.0";
            }
        }
        setAvg(ratings);
    }, [instruments])

    if (!instruments) {
        return null;
    } else {
    return (
        <>
        <div className="createInstrumentButtonContainer">
            <NavLink to="/instruments/new">
            {currentUser && (<button className="createInstrumentButton">Post an Instrument</button>)}
            </NavLink>
        </div>
        <div className="instruments-container">
            <div className="gridContainer">
                {instruments?.map(instrument => (
                    <div className="instrument" key={instrument?.id}>
                        <NavLink to={`/instruments/${instrument?.id}`} key={`${instrument?.id}`} className="instrumentLinks">
                            <div className="instrumentContainer">
                                <img className="instrumentImage" src={instrument?.imageSrc} alt="" ></img>
                                <div className="nameAvgContainer">
                                    <div className="instrumentName">{instrument?.name}</div>
                                    <div className="scoreTextAvgContainer">
                                        <div className="avgScoreText">Average Review Score:</div>
                                        <div className="instrumentAvg">{avg[instrument?.id]}</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
    }
}

export default InstrumentsPage;
