import React from "react";
import Card from "../Card/Card";

export default function Home() {
    const activities = fetch('./../../../../data/activities.json')
    .then((res)=>res.json())
    .then((json)=>json)
    return (
        <div>
            <h1>asdasd</h1>
            {
                console.log(activities)
            }
            <Card />
        </div>
    )
}