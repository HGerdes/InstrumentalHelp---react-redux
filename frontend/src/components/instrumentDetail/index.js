import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { getInstrumentDetail } from "../../store/instruments"
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { getReviewsForInstrument } from "../../store/reviews";
import { deleteReview } from '../../store/reviews';
import InstrumentsPage from '../InstrumentPage/Instruments';

const InstrumentDetailPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {pathname} = history.location
    const uniqueInstrumentId = pathname.split("/")[2]

    const currentUser = useSelector(state => state.session.user);

    let userId;
    if (currentUser) {
        userId = currentUser.id;
    }

    const reviews = useSelector(state => {
        return state.reviews.getAllReviews
    })

    useEffect(() => {
        dispatch(getReviewsForInstrument(uniqueInstrumentId))
    }, [dispatch, uniqueInstrumentId])

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

    const deleteButton = (id) => {
        const removeReview = dispatch(deleteReview(id))

        if (removeReview) {
            window.location.reload();
        }
    }

    let manufact;
    let type;
    let showEditForm;
    if (instrumentDetail) {

        if (manufacturerTypes) {
            const instManufacturer = (instrumentDetail.manufacturerId) - 1;
            manufact = manufacturerTypes[instManufacturer].name;
        }

        if (instrumentTypes) {
            const instType = (instrumentDetail.typeId) - 1;
            type = instrumentTypes[instType].type;
        }

        if (currentUser && (currentUser.id === instrumentDetail.userId)) {
            showEditForm = true;
        }
    }

    useEffect(() => {
        dispatch(getInstrumentDetail(uniqueInstrumentId))
    }, [dispatch, uniqueInstrumentId])

    let ratingArr = [];
    // console.log(ratingArr)
    // console.log(ratingArr[1])
    // let sum;
    // for (let i = 0; i < ratingArr.length; i++) {
    //     sum = sum + ratingArr[i];
    // }

    // let avg = sum / 5;
    // console.log(avg)

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
                            <button>edit</button>
                        </NavLink>
                        <NavLink to={`/instruments/${uniqueInstrumentId}/delete`}>
                            <button>delete</button>
                        </NavLink>
                    </div>
                )}
            </div>
            <div className="reviewButton">
                <NavLink to={`/reviews/${uniqueInstrumentId}/new`}>
                    <button>review</button>
                </NavLink>
            </div>
            <div className="reviews">
                {reviews?.map((review => (
                    <div key={review.id} className="review">
                        <div className="arrPush" hidden={true}>{ratingArr.push(review.rating)}</div>
                        <div className="reviewContainer">{review.review}
                            <div className="reviewRating">Rating: {review.rating} out of 5 </div>
                            <div className="reviewText">
                                <NavLink to={`/reviews/${review.id}/edit`}>
                                    <button>edit</button>
                                </NavLink>
                                {review.userId === userId ? (
                                    <button onClick={() => deleteButton(review.id)}>delete</button>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default InstrumentDetailPage;
