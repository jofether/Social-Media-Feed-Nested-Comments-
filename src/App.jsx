import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* MAIN POST */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="p-4 flex space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">Sarah Engineering</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="px-4 pb-2 text-gray-800 leading-relaxed">
            Just pushed the new multimodal search update! The latency dropped by 40% after we optimized the vector indexing. 🚀
          </div>
          <div className="h-64 bg-gray-200 mt-2 flex items-center justify-center text-gray-500">
            [Chart Image Placeholder]
          </div>
          <div className="p-4 border-t border-gray-100 flex justify-between text-gray-500 text-sm">
            <span>24 Likes</span>
            <span>5 Comments</span>
          </div>
        </div>

        {/* COMMENT SECTION */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 space-y-6">
          <h3 className="font-bold text-gray-700">Comments</h3>

          {/* Comment 1 (Parent) */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0"></div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg rounded-tl-none">
              <p className="text-sm font-bold text-gray-900">Mark Dev</p>
              <p className="text-sm text-gray-700">Incredible work! Did you use FAISS for the indexing?</p>
            </div>
          </div>

          {/* Comment 1.1 (Child - Indented) */}
          <div className="flex space-x-3 ml-12">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
            <div className="flex-1 bg-blue-50 p-3 rounded-lg rounded-tl-none border border-blue-100">
              <p className="text-sm font-bold text-indigo-900">Sarah Engineering</p>
              <p className="text-sm text-indigo-800">Yes! We switched to HNSW index type for better recall.</p>
            </div>
          </div>

          {/* Comment 2 (Parent) */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0"></div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg rounded-tl-none">
              <p className="text-sm font-bold text-gray-900">Junior Dev</p>
              <p className="text-sm text-gray-700">I'm still trying to understand how the gating network works. Is it open source?</p>
            </div>
          </div>

           {/* Comment 2.1 (Child) */}
           <div className="flex space-x-3 ml-12">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex-shrink-0"></div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg rounded-tl-none">
              <p className="text-sm font-bold text-gray-900">Team Lead</p>
              <p className="text-sm text-gray-700">Check the repo documentation, we added a diagram yesterday.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;