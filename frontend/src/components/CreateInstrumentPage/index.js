import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { createInstrument } from "../../store/instruments";


const CreateInstrumentForm = () => {
    const currentUser = useSelector((state) => state.session.user);
    const userId = currentUser.id;

    const instrumentTypes = useSelector(state => {
        return state.instruments.getTypes;
    });

    const manufacturerTypes = useSelector(state => {
        return state.instruments.getManufacturers;
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [type, setType] = useState(1);
    const [manufacturer, setManufacturer] = useState(1);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const updateType = (e) => setType(e.target.value);
    const updateManufacturer = (e) => setManufacturer(e.target.value)

    useEffect(() => {
        dispatch(getInstrumentTypes());
    }, [dispatch]);

    // useEffect(() => {
    //     if (instrumentTypes) {
    //         console.log("instrument types: ", instrumentTypes)
    //         setType(instrumentTypes);
    //     }
    // }, [instrumentTypes])

    useEffect(() => {
        dispatch(getInstrumentManufacturers());
    }, [dispatch]);

    // useEffect(() => {
    //     if (manufacturerTypes) {
    //         console.log("manufacturer types: ", manufacturerTypes)
    //         setManufacturer(manufacturerTypes);
    //     }
    // }, [manufacturerTypes])

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("!!!!type: ", type)

        const payload = {
            userId,
            name,
            typeId: type,
            manufacturerId: manufacturer,
            description
        };

        let newInstrument = await dispatch(createInstrument(payload));
        console.log("NI: ", newInstrument)

        history.push(`/instruments`);

    };

    return (
        <form className="newInstrumentForm" onSubmit={onSubmit}>
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
                <select className="typeSelect"  onChange={(e) => setManufacturer(e.target.value)} value={manufacturer}>
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
            <button type="submit">Submit New Instrument</button>
        </form>
    );
}

export default CreateInstrumentForm
