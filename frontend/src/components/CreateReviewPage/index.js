import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createReview } from "../../store/reviews";

const CreateReviewForm = () => {
    const currentUser = useSelector((state) => state.session.user);
    let userId;

    if (currentUser) {
        userId = currentUser.id;
    }

    const dispatch = useDispatch();
    const history = useHistory();
    const {pathname} = history.location;
    const id = parseInt(pathname.split("/")[2]);

    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            instrumentId: id,
            rating,
            helpful: 0,
            unhelpful: 0,
            review
        };

        let newReview = await dispatch(createReview(payload, id));
        history.push(`/instruments/${id}`)
    };

    return (
        <form className="newReviewForm" onSubmit={onSubmit}>
            <div className="reviewTextContainer"> Write your review:
                <textarea
                    name="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <div className="rateContainer">Rate this instrument:
                <select className="ratingSelect" onChange={(e) => setRating(e.target.value)}>
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

export default CreateReviewForm
