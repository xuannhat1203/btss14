"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [valueInput, setValueInput] = useState<string>("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    handleFilter();
  }, [valueInput, data]);

  const handleFilter = () => {
    if (valueInput === "1") {
      setFilteredData(data.filter((pro) => pro.price >= 0 && pro.price < 50));
    } else if (valueInput === "2") {
      setFilteredData(data.filter((pro) => pro.price >= 50 && pro.price < 100));
    } else if (valueInput === "3") {
      setFilteredData(data.filter((pro) => pro.price >= 100));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div>
      <div>
        <select onChange={(e) => setValueInput(e.target.value)}>
          <option value="">Chọn phạm vi giá</option>
          <option value="1">0 đến 50</option>
          <option value="2">50 đến 100</option>
          <option value="3">Hơn 100</option>
        </select>
      </div>
      <div className="p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((pro) => (
              <tr key={pro.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pro.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pro.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    src={pro.image}
                    alt={pro.title}
                    width={150}
                    height={60}
                    className="rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
