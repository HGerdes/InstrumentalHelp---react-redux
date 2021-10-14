import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { editSingleInstrument } from "../../store/instruments";
import { useParams} from "react-router-dom";

const EditInstrumentForm = () => {
    const currentUser = useSelector((state) => state.session.user);
    const userId = currentUser.id;
    const history = useHistory();
    // const {id} = useParams();

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
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getInstrumentTypes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getInstrumentManufacturers());
    }, [dispatch]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            name,
            typeId: type,
            manufacturerId: manufacturer,
            description
        };

        let newInstrument = await dispatch(editSingleInstrument(payload));
        history.push(`/instruments`);
    };

    return (
        <form className="editInstrumentForm" onSubmit={onSubmit}>
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
            <button type="submit">Submit Edited Instrument</button>
        </form>
    );
}

export default EditInstrumentForm
