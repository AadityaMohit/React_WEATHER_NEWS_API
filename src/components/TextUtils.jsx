import React, { useState } from 'react';
import './TextUtils.css'; // Import CSS file for styling

function TextUtils() {
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [textLength, setTextLength] = useState(0);

  // Function to handle text processing
  const handleProcessText = () => {
    // Perform text processing here (for example, converting text to uppercase)
    const processed = text.toUpperCase();
    setProcessedText(processed);
    setCharCount(processed.length);
    setWordCount(processed.split(/\s+/).filter(word => word !== '').length);
    setTextLength(text.length);
  };

  // Function to handle copying the processed text
  const handleCopyText = () => {
    navigator.clipboard.writeText(processedText);
  };

  // Function to handle converting text to lowercase
  const handleLowercaseText = () => {
    const processed = text.toLowerCase();
    setProcessedText(processed);
  };

  return (
    <div className="text-utils-container">
      <h1>Text Utilities</h1>
      <textarea
        className="text-area"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="process-button" onClick={handleProcessText}>Capitalize</button>
      <button className="process-button" onClick={handleCopyText}>Copy Text</button>
      <button className="process-button" onClick={handleLowercaseText}>Convert to Lowercase</button>
      {processedText && (
        <div className="processed-text">
          <h2>Processed Text:</h2>
          <p>{processedText}</p>
        </div>
      )}
      <div className="feature-info">
        <p>Number of Characters: {charCount}</p>
        <p>Number of Words: {wordCount}</p>
        <p>Text Length: {textLength}</p>
      </div>
    </div>
  );
}

export default TextUtils;
