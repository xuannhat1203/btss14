import React from "react";

async function getData() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m"
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h4>Nhiệt độ: {data.latitude}</h4>
      <h4>
        Trạng thái thời tiết: {data.hourly_units.time}-
        {data.hourly_units.temperature_2m}
      </h4>
    </div>
  );
}
