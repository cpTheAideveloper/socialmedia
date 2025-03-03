// File: src/components/ui/TypeSelector.tsx
'use client';
import { Dispatch, SetStateAction } from 'react';

interface TypeSelectorProps {
  contentType: string;
  setContentType: Dispatch<SetStateAction<string>>;
}

export default function TypeSelector({ contentType, setContentType }: TypeSelectorProps) {
  const types = ['Educational', 'Promotional', 'Engagement', 'Trends'];

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Content Type:</label>
      <div className="flex gap-2 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setContentType(type)}
            className={`border px-3 py-1 rounded ${contentType === type ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}