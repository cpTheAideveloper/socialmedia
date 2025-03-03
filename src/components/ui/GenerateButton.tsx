// File: src/components/ui/GenerateButton.tsx
'use client';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function GenerateButton({ onClick, disabled }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
    >
      Generate Ideas
    </button>
  );
}