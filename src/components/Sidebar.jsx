import React from 'react';

const menuItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🔔', label: 'Notifications' },
  { icon: '💬', label: 'Messages' },
  { icon: '🔖', label: 'Bookmarks' },
  { icon: '👥', label: 'Community' },
  { icon: '⚙️', label: 'Settings' },
];

const trends = [
  { trending: 'React', volume: '245K' },
  { trending: 'TypeScript', volume: '189K' },
  { trending: '#WebDevelopment', volume: '412K' },
  { trending: 'Next.js', volume: '156K' },
  { trending: 'TailwindCSS', volume: '234K' },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:block fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] pp-4 pt-6">
      
      {/* Navigation */}
      <nav className="space-y-3 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg font-semibold text-lg transition ${
              item.active 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Trending Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What's Trending</h3>
        <div className="space-y-4">
          {trends.map((trend, idx) => (
            <button
              key={idx}
              className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition group"
            >
              <div className="flex justify-between items-start">
                <div className="group-hover:translate-x-1 transition">
                  <p className="text-gray-500 text-sm">Trending in Tech</p>
                  <p className="font-bold text-gray-900">{trend.trending}</p>
                </div>
                <span className="text-gray-500 text-sm">{trend.volume}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
