import React from "react"
export default function FlatInfoCard(props) {
    return (

        <div className="items-start self-stretch flex w-full justify-between gap-5 mt-4">
            <div className="text-teal-950 text-l leading-5 tracking-normal self-stretch">{props.property}</div>
            <div className="text-teal-950 text-l font-bold leading-5 tracking-normal self-stretch whitespace-nowrap">
                <span className="font-bold">{props.value}</span>
            </div>
        </div>

    )
}