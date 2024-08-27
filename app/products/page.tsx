import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const list = await getData();
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          {list.map((product: any) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{product.title}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={70}
                  className="rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
