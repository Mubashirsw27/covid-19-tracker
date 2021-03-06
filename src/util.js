import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import "./Map.css";
const casesTypeColors = {
    cases: {
        hex: "#CC1034",

        multiplier: 800
    },

    recovered: {
        hex: "#7DD71D",

        multiplier: 1200
    },

    deaths: {
        hex: "#C0C0C0",

        multiplier: 2000
    },
};
export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));

}

export const prettyPrintStat = (stat) => 
stat ? `${numeral(stat).format("0,0a")}+` : "+0";



export const showDataOnMap = (data, casesType = "cases") =>
    data.map((country) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            pathOptions={{
                color: casesTypeColors[casesType].hex,
                fillColor: casesTypeColors[casesType].hex,
            }}
            radius={
                Math.sqrt(country[casesType] / 20) *
                casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="infoContainer">
                    <div
                        className="infoImg"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    >
                    </div>
                    <div className="infoName">{country.country}</div>
                    <div className="infoCases">Cases : {numeral(country.cases).format("0,0")}</div>
                    <div className="infoRecovered">Recovered : {numeral(country.recovered).format("0,0")}</div>
                    <div className="infoDeaths">Deaths : {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle>

    )

    )

