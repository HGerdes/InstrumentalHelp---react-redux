import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {getInstruments} from "../store/instruments"
import './instrumentPage.css';

const instrumentDisplay = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInstruments())
    }, [dispatch])
}
