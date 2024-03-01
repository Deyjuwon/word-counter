import React, { useState } from 'react'

const Home = () => {

    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, steCharCount] = useState(0);
    const [char, setChar] = useState('')
  
    const handleTextChange = (event) => {
      const newText = event.target.value;
      setText(newText);
      // Split the text by whitespace and filter out empty strings
      const words = newText.trim().split(/\s+/).filter(word => word !== '');
    
      setWordCount(words.length);
      steCharCount(newText.length)
    };
  
    return (
      <div className='w-full h-screen bg-gradient-to-r from-lin-black to-lin-purple flex flex-col gap-5 pt-10'>
        <h1 className='text-center text-2xl text-white'>Word Counter</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type something here..."
          rows={5}
          cols={50}
          className='mx-5 rounded-2xl p-5 bg-transparent border border-white text-white placeholder-white outline-none'
        />
        <div className='flex items-center justify-center gap-5'>
          <p className='text-white'>Character Count: {charCount}</p>
          <p className='text-white'>Word Count: {wordCount}</p>
        </div>
        
      </div>
    );
  }

export default Home