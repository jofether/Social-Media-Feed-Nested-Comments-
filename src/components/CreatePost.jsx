import React, { useState } from 'react';

export default function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
      <div className="flex space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
          JD
        </div>
        <div className="flex-1">
          {/* [BUG - SPACING] Negative margin -m-8 causes textarea to overflow container
              [FIX] Remove -m-8 or use standard padding/margin */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-gray-100 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none -m-8"
            rows={3}
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
            </div>
            {/* [BUG - COLOR & CONTRAST] text-gray-500 on bg-gray-500 is nearly invisible 
                [FIX] Change to text-gray-100 or use text-white */}
            <button className={`px-6 py-2 rounded-full font-bold transition ${
              content.trim()
                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
                : 'bg-gray-500 text-gray-500 cursor-not-allowed'
            }`} disabled={!content.trim()}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
