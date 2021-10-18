import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { getInstrumentDetail } from "../../store/instruments"
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { getReviewsForInstrument } from "../../store/reviews";
import { deleteReview } from '../../store/reviews';
import { getUsers } from '../../store/users';
import "./instrumentDetail.css";

const InstrumentDetailPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {pathname} = history.location;
    const uniqueInstrumentId = pathname.split("/")[2];

    const currentUser = useSelector(state => state.session.users);

    // const user = useSelector((store) => store.userReducer.reviewers);

    let userId;
    if (currentUser) {
        userId = currentUser.id;
    }

    const reviews = useSelector(state => {
        return state.reviews.getAllReviews
    })

    const reviewers = useSelector(state => state.users.reviewers)

    // if (reviews) {
    //     const map = reviews?.map((review => {
    //         console.log("review:", review)
    //         const person = review?.userId;
    //         console.log("reviewers", reviewers)
    //         if (reviewers) {
    //             Object.values(reviewers).find(reviewer => reviewer?.id === person)
    //         reviewers ? Object.values(reviewers).find(reviewer => reviewer?.id.id === review?.userId) : ""
    //         }
    //     }))
    //     console.log("MAP",map)
    // }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


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

    return (
        <>
        <div className="siteContainer">
            <div className="InstrumentDetails">
                <div className="instDetContainer">
                    <img className="instrumentPic" src={instrumentDetail?.imageSrc}></img>
                    <div className="detContainer">
                        <div className="instrumentDetName">{instrumentDetail?.name}</div>
                        <div className="instrumentDetManufacturer">By: {manufact}</div>
                        <div className="instrumentDetType">{type}</div>
                    </div>
                </div>
                <div className="editAndDelButtonContainer">
            {(showEditForm) && (
                <div className="buttons">
                    <div className="editAndDelBtnContainer">
                        <NavLink  to={`/instruments/${uniqueInstrumentId}/edit`}>
                            <button className="editInstBtn">edit</button>
                        </NavLink>
                        <NavLink to={`/instruments/${uniqueInstrumentId}/delete`}>
                            <button className="delInstBtn">delete</button>
                        </NavLink>
                    </div>
                    <NavLink to={`/reviews/${uniqueInstrumentId}/new`}>
                        <button className="reviewBtn">review</button>
                    </NavLink>
                </div>
                )}
            </div>

                <div className="hr" id="tophr"></div>
                <div className="descContainer">
                    <h3 className="aboutTheInst">About the Instrument</h3>
                    <div className="instrumentDetDesc">{instrumentDetail?.description}</div>
                </div>
                <div className="hr" id="bottomhr"></div>

            </div>
            <div className="reviewContainer">
                {reviews?.map((review => (
                    <div key={review.id} className="review">
                        <div className="reviewName">
                            {
                                reviewers ? Object.values(reviewers).find(reviewer => reviewer?.id.id === review?.userId) : ""

                            }
                        </div>
                        <div className="reviewAuthor">{review.User.username}</div>
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
        </>
    )
}

export default InstrumentDetailPage;
