import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createReview } from "../../store/reviews";
import "./CreateReviewPage.css"

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
            userId,
            instrumentId: id,
            rating,
            helpful: 0,
            unhelpful: 0,
            review
        };

        await dispatch(createReview(payload, id));
        history.push(`/instruments/${id}`)
    };

    return (
        <form className="newReviewForm" onSubmit={onSubmit}>
            <div className="formContainer">
                <ul className="errors">
                    {errors.map(error => (
                    <li key={error}>{error}</li>
                    ))}
                </ul>
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
                <button className="subBut" disabled={ errors.length > 0 } type="submit">Submit your review</button>
            </div>
        </form>
    )
}

export default CreateReviewForm
