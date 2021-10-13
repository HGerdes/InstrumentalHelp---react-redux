import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getInstrumentTypes, getInstrumentManufacturers } from "../../store/instruments"
import { createInstrument } from "../../store/instruments";


const CreateInstrumentForm = () => {
    const currentUser = useSelector((state) => state.session.user);

    const instrumentTypes = useSelector(state => {
        return state.instruments.getTypes;
    });

    const manufacturerTypes = useSelector(state => {
        return state.instruments.getManufacturers;
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const updateType = (e) => setType(e.target.value);
    const updateManufacturer = (e) => setManufacturer(e.target.value)

    useEffect(() => {
        dispatch(getInstrumentTypes());
    }, [dispatch]);

    useEffect(() => {
        if (instrumentTypes && !type) {
            setType(instrumentTypes[0]);
        }
    }, [instrumentTypes, type])

    useEffect(() => {
        dispatch(getInstrumentManufacturers());
    }, [dispatch]);

    useEffect(() => {
        if (manufacturerTypes && !type) {
            setManufacturer(manufacturerTypes[0]);
        }
    }, [manufacturerTypes, type])

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            type,
            manufacturer,
            description
        };

        let newInstrument = await dispatch(createInstrument(payload));

        if (newInstrument) {
            history.push(`/instruments`);
        }
    };

    return (
        <form className="newInstrumentForm" onSubmit={onSubmit}>
            <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select className="typeSelect" onChange={updateType}>
                {instrumentTypes?.map(type =>
                    <option key={type.id}>{type.type}</option>
                )}
            </select>
            <select className="typeSelect" onChange={updateManufacturer}>
                {manufacturerTypes?.map(manufacturer =>
                    <option key={manufacturer.id}>{manufacturer.name}</option>
                )}
            </select>



        </form>
    )
}

export default CreateInstrumentForm
