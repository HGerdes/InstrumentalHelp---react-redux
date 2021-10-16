import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { getInstruments } from "../../store/instruments"
import { getReviewsForInstrument } from "../../store/reviews";
import './instrumentPage.css';


const InstrumentsPage = () => {
    const dispatch = useDispatch();

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
                let avg;
                let total = 0;
                instrument["Reviews"].forEach(review => {
                    if (!review.rating) {
                        review.rating = 1;
                    }
                    total += review.rating;
                    console.log(total)
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
        <div className="createInstrumentButton">
            <NavLink to="/instruments/new">
                <button>Create an Instrument</button>
            </NavLink>
        </div>
        <div className="instruments-container">
            <div className="gridContainer">
                {instruments?.map(instrument => (
                        <div className="instrument" key={instrument?.id}>
                        <NavLink to={`/instruments/${instrument?.id}`} key={`${instrument?.id}`} className="instrumentLinks">
                            <div className="instrumentContainer">
                                <img className="instrumentImage" src={instrument?.imageSrc} ></img>
                                <div className="instrumentName">{instrument?.id}. {instrument?.name}</div>
                                <div className="instrumentAvg">{avg[instrument?.id]}</div>
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
