import React from "react";

export default function Card({ item }) {
  const handleClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${item.loc}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-5 bg-red-50 p-4">
      <div className="bg-red-100">ECZANE: {item.name}</div>
      <div className="bg-red-200">ADRES: {item.address}</div>
      <div className="bg-red-300">İLÇE: {item.dist}</div>
      <div className="bg-red-400">KONUM: {item.loc}</div>
      <div className="bg-red-500">TELEFON: {item.phone}</div>
      <button onClick={handleClick} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        HARİTADA AÇ
      </button>
    </div>
  );
}
