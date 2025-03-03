// File: src/components/ui/IndustrySelector.tsx
'use client';
import { Dispatch, SetStateAction } from 'react';

interface IndustrySelectorProps {
  industry: string;
  setIndustry: Dispatch<SetStateAction<string>>;
}

export default function IndustrySelector({ industry, setIndustry }: IndustrySelectorProps) {
  const industries = ['Gastronomy', 'Fashion', 'Technology', 'Health and Wellness'];

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Industry:</label>
      <select
        className="border p-2 rounded w-full"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      >
        <option value="">Select an industry</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>
    </div>
  );
}