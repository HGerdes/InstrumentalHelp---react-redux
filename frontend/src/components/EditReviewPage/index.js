import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editSingleReview } from "../../store/reviews";
import { getSingleReview } from "../../store/reviews";

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
    },[dispatch, id])

    let userId;
    if (currentUser) {
        userId = currentUser.id;
    }

    useEffect(() => {
        const errors = [];

        if (review.length < 10) {
            errors.push("Write a little more for your review")
        }

        if (review.length > 255) {
            errors.push("Please shorten your review (255 characters max)")
        }

        setErrors(errors)
    },[review])

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
        let editedReview = await dispatch(editSingleReview(payload, id));
        history.push(`/instruments/${editedReview.instrumentId}`)
    }

    if (!reviewData) {
        return null;
    } else {
        return (
            <form className="newReviewForm" onSubmit={onSubmit}>
                <ul className="errors">
                {errors.map(error => (
                <li key={error}>{error}</li>
                ))}
            </ul>
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
                <button disabled={ errors.length > 0 } type="submit">Submit your review</button>
            </form>
        )
    }
}

export default EditReviewForm;
