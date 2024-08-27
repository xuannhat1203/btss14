import axios from "axios";
import React from "react";
async function getData() {
  const res = await axios.get("https://example.com/invalid-endpoint");
  const data = await res.data;
  return data;
}
export default async function page() {
  const data = await getData();
  return <div>{data}</div>;
}
