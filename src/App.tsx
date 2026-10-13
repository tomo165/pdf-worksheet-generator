import React, { useState } from 'react';

export default function App() {
  const [grade, setGrade] = useState<number>(2);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-800">PDF Worksheet Generator</h1>
      <p className="text-gray-600 mt-2">Generate printable math sheets for Grade {grade}.</p>
    </div>
  );
}
