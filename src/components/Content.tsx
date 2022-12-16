import React from 'react';
import {DataStateType} from "../dataState/DataState";
import {Navigate} from "react-router-dom";

type PropsType = {
    page: DataStateType
    route: number
}


export const Content = (props: PropsType) => {


    return (
        props.route  < props.page.pages.length
            ?
            <>
                <h1>{props.page.pages[props.route].heading}</h1>
                <div>{props.page.pages[props.route].about}</div>
            </>
            : <Navigate to={'/xxx'}/>
    );
};

