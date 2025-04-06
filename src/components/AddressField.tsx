"use client";

import { useState, useEffect } from "react";

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AddressField({ value, onChange }: AddressFieldProps) {
  const [addressData, setAddressData] = useState<{
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }>(
    value && value !== ""
      ? JSON.parse(value)
      : {
          street: "",
          number: "",
          complement: "",
          neighborhood: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        }
  );

  const handleChange = (key: keyof typeof addressData, fieldValue: string) => {
    const newData = { ...addressData, [key]: fieldValue };
    setAddressData(newData);
    onChange(JSON.stringify(newData));
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Street</label>
          <input
            type="text"
            value={addressData.street}
            onChange={(e) => handleChange("street", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Number</label>
          <input
            type="text"
            value={addressData.number}
            onChange={(e) => handleChange("number", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Complement</label>
        <input
          type="text"
          value={addressData.complement}
          onChange={(e) => handleChange("complement", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Neighborhood</label>
        <input
          type="text"
          value={addressData.neighborhood}
          onChange={(e) => handleChange("neighborhood", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">City</label>
          <input
            type="text"
            value={addressData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">State</label>
          <input
            type="text"
            value={addressData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">ZIP Code</label>
          <input
            type="text"
            value={addressData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Country</label>
          <input
            type="text"
            value={addressData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
          />
        </div>
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-900">Preview:</p>
        <div className="text-gray-900 mt-2">
          <p>
            {addressData.street} {addressData.number}
          </p>
          {addressData.complement && <p>{addressData.complement}</p>}
          {addressData.neighborhood && <p>{addressData.neighborhood}</p>}
          <p>
            {addressData.city}, {addressData.state} {addressData.zipCode}
          </p>
          <p>{addressData.country}</p>
        </div>
      </div>
    </div>
  );
}
