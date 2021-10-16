import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editSingleReview } from "../../store/reviews";
import { getSingleReview } from "../../store/reviews";
import { useParams } from "react-router-dom";

const EditReviewForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const {pathname} = history.location;
    const id = parseInt(pathname.split("/")[2]);

    const reviewData = useSelector(state => {
        return state.reviews.loadOneReview
    })

    // const [rating, setRating] = useState(reviewData?.review || "");
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(getSingleReview(id));
    },[dispatch])

    let userId;
    if (currentUser) {
        userId = currentUser.id;
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            userId,
            rating,
            helpful: 0,
            unhelpful: 0,
            review
        };
        console.log(payload)
        let editedReview = await dispatch(editSingleReview(payload, id));
        history.push(`/instruments/${editedReview.instrumentId}`)
    }

    if (!reviewData) {
        return null;
    } else {
        return (
            <form className="newReviewForm" onSubmit={onSubmit}>
                <div className="reviewTextContainer"> Write your review:
                    <textarea
                        type="review"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div className="rateContainer">Rate this instrument:
                    <select className="ratingSelect" defaultValue={reviewData.rating}  onChange={(e) => setRating(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button type="submit">Submit your review</button>
            </form>
        )
    }
}

export default EditReviewForm;
