import React from 'react';
import {dataState, DataStateType} from "../../dataState/DataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PropsType = {
    dataState: DataStateType
}

export const Page = (props:PropsType) => {
    // console.log(props.dataState)

    let params = useParams()
    // console.log(Number(params.id))
    return (
        <div>
            <Content

                // передаем все страницы
                page={props.dataState}

                //передаем роутинги
                route={Number(params.id)}
                // heading={props.dataState.pages[Number(params.id)].heading}
                // about={props.dataState.pages[Number(params.id)].about}
            />
       {/*{props.dataState.pages[Number(params.id)].heading}*/}
        </div>
    );
};

