// File: src/components/ui/IdeasList.tsx
'use client';
import { ContentPlanner } from '@/types';

interface IdeasListProps {
  ideas: ContentPlanner.Idea[];
}

export default function IdeasList({ ideas }: IdeasListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ideas.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded shadow ${
            item.type.toLowerCase().includes('promotional')
              ? 'bg-yellow-100'
              : item.type.toLowerCase().includes('educational')
              ? 'bg-blue-100'
              : item.type.toLowerCase().includes('engagement')
              ? 'bg-green-100'
              : 'bg-pink-100'
          }`}
        >
          <h3 className="font-bold">{item.idea}</h3>
          <p className="text-sm mt-1">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}