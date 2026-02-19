import React from 'react';

const suggestedUsers = [
  { name: 'Alex Chen', handle: 'alexchen', followers: '125K', verified: true },
  { name: 'Emma Watson', handle: 'emmawatson', followers: '2.3M', verified: true },
  { name: 'Dev Community', handle: 'devcommunity', followers: '456K', verified: true },
  { name: 'Tech News Daily', handle: 'technewsdaily', followers: '890K', verified: false },
];

export default function RightSidebar() {
  return (
    <div className="hidden xl:block fixed right-0 top-16 w-80 h-[calc(100vh-4rem)] p-4 pt-6">
      
      {/* Suggested Users */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Who to follow</h3>
        <div className="space-y-3 flex flex-col-reverse">
          {suggestedUsers.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.name.substring(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-5">@{user.handle}</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-full font-semibold text-sm bg-blue-500 text-white hover:bg-blue-600 transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-500 space-y-1">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <p className="text-gray-400">© 2025 SocialHub. All rights reserved.</p>
      </div>
    </div>
  );
}
