import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { editSingleInstrument } from "../../store/instruments";

const EditInstrumentForm = () => {
    const history = useHistory();

    const {pathname} = history.location;
    const id = pathname.split("/")[2];

    const instrumentTypes = useSelector(state => {
        return state.instruments.getTypes;
    });

    const manufacturerTypes = useSelector(state => {
        return state.instruments.getManufacturers;
    });

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [type, setType] = useState(1);
    const [manufacturer, setManufacturer] = useState(1);
    const [description, setDescription] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getInstrumentTypes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getInstrumentManufacturers());
    }, [dispatch]);

    useEffect(() => {
        const errors = [];

        const imageTypes = ["png", "jpg", "jpeg", "gif"];
        const imageType = imageSrc.split(".");
        const imageExt = imageType[imageType.length-1];

        if (name.length < 1 || name.length > 50) {
            errors.push("The name of the instrument needs to be more than one letter and less than 50 letters")
        }

        if (description.length === 0) {
            errors.push("Enter a description")
        }

        if (!imageTypes.includes(imageExt)) {
            errors.push("Must be valid image (png, jpg, jpeg, gif)"
        }

        setErrors(errors)
    },[name, description, imageSrc])

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            name,
            typeId: type,
            manufacturerId: manufacturer,
            description,
            imageSrc
        };

        await dispatch(editSingleInstrument(payload));
        history.push(`/instruments/${id}`);
    };

    return (
        <form className="editInstrumentForm" onSubmit={onSubmit}>
             <ul className="errors">
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <div>Name of Instrument:
                <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>Type of Instrument:
                <select className="typeSelect" onChange={(e) => setType(e.target.value)}>
                    {instrumentTypes?.map(type =>
                        <option key={type.id} value={type.id}>{type.type}</option>
                    )}
                </select>
            </div>
            <div>Instrument Manufacturer:
                <select className="typeSelect" onChange={(e) => setManufacturer(e.target.value)} value={manufacturer}>
                    {manufacturerTypes?.map(manufacturer =>
                        <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                    )}
                </select>
            </div>
            <div>Describe the instrument:
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div> Image Source:
                <input
                    type={"imageSrc"}
                    name={"imageSrc"}
                    value={imageSrc}
                    onChange={(e) => setImageSrc(e.target.value)}
                />
            </div>
            <button  disabled={ errors.length > 0 } type="submit">Submit Edited Instrument</button>
        </form>
    );
}

export default EditInstrumentForm
