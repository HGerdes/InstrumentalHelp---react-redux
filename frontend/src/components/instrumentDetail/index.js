import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { getInstrumentDetail } from "../../store/instruments"
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { getReviewsForInstrument } from "../../store/reviews";
import { deleteReview } from '../../store/reviews';
import "./instrumentDetail.css";

const InstrumentDetailPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {pathname} = history.location;
    const uniqueInstrumentId = pathname.split("/")[2];

    const currentUser = useSelector(state => state.session.user);


    console.log(currentUser)
    let userId;
    if (currentUser) {
        userId = currentUser.id;
    }

    const reviews = useSelector(state => {
        return state.reviews.getAllReviews
    })

    const reviewers = useSelector(state => state.users.reviewers)

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
    let showCommentEditForm;
    if (instrumentDetail) {
        console.log(instrumentDetail)
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

    if (currentUser)
    console.log(currentUser.id)



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
                    <div className="buttons">
                    {showEditForm && (
                        <div className="editAndDelBtnContainer">
                            <NavLink  to={`/instruments/${uniqueInstrumentId}/edit`}>
                            {currentUser && currentUser.id === Number(instrumentDetail?.userId) && (<button className="editInstBtn">edit</button>)}
                            </NavLink>
                            <NavLink to={`/instruments/${uniqueInstrumentId}/delete`}>
                            {currentUser && currentUser.id === Number(instrumentDetail?.userId) && (<button className="delInstBtn">delete</button>)}
                            </NavLink>
                        </div>
                    )}
                        <div className="reviewButton">
                            <NavLink to={`/reviews/${uniqueInstrumentId}/new`}>
                            {currentUser && (<button className="reviewBtn">review</button>)}
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="hr" id="tophr"></div>
                <div className="descContainer">
                    <h3 className="aboutTheInst">About the Instrument</h3>
                    <div className="instrumentDetDesc">{instrumentDetail?.description}</div>
                </div>
                <div className="hr" id="bottomhr"></div>

            </div>
            <div className="reviewContainer">
            <div className="recentReviews">Recent Reviews</div>

                {reviews?.map((review => (
                    <div key={review.id} className="review">
                        <div className="reviewDetContainer">
                            <div className="reviewAuthor">{review.User.username}</div>
                            <div className="reviewRating">Rating: {review.rating} out of 5 </div>
                            <div className="reviewText">{review.review}
                                <div className="editBtnContainer">
                                <NavLink to={`/reviews/${review.id}/edit`}>
                                {currentUser && currentUser.id === Number(review.userId) && (<button>edit</button>)}
                                        </NavLink>{console.log("currentUser",currentUser)}
                                        {currentUser && currentUser.id === Number(review.userId) && (<button onClick={() => deleteButton(review.id)}>delete</button>)}
                                </div>
                                <div className="hrReview" id="bottomhr"></div>
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
