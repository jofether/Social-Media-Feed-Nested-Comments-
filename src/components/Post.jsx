import React, { useState } from 'react';
import Comment from './Comment';

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition mb-6">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${post.avatarBg}`}>
            {post.initials}
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-gray-900">{post.author}</p>
              {post.verified && <span>✓</span>}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>@{post.handle}</span>
              <span>·</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-500 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4">
        <p className="text-gray-900 text-base leading-relaxed">{post.content}</p>
        {post.hashtags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {post.hashtags.map((tag, idx) => (
              <span key={idx} className="text-blue-500 hover:underline cursor-pointer text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="mt-3 mx-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">{post.imageEmoji}</div>
            <p className="text-white font-semibold">{post.image}</p>
          </div>
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-3 border-t border-gray-100 border-b flex justify-between text-sm text-gray-500 -mt-12">
        <span>{post.views} views</span>
        <div className="flex space-x-4">
          <span>{post.retweets} Retweets</span>
          <span>{post.replies} Replies</span>
          <span>{post.likes} Likes</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-3 flex justify-around relative">
        <button className="flex-1 py-2 flex items-center justify-center space-x-2 text-gray-500 hover:text-blue-500 transition rounded-lg hover:bg-blue-50 absolute top-0 left-0">
          <span>💬</span>
          <span className="text-sm">{post.replies}</span>
        </button>
        <button className="flex-1 py-2 flex items-center justify-center space-x-2 text-gray-500 hover:text-green-500 transition rounded-lg hover:bg-green-50">
          <span>🔁</span>
          <span className="text-sm">{post.retweets}</span>
        </button>
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex-1 py-2 flex items-center justify-center space-x-2 transition rounded-lg ${
            liked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <span>{liked ? '❤️' : '🤍'}</span>
          <span className="text-sm">{liked ? post.likes + 1 : post.likes}</span>
        </button>
        <button className="flex-1 py-2 flex items-center justify-center space-x-2 text-gray-500 hover:text-blue-500 transition rounded-lg hover:bg-blue-50">
          <span>📤</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="border-t border-gray-100 px-4 py-3">
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-blue-500 text-sm font-semibold hover:underline"
        >
          {showComments ? 'Hide' : 'Show'} {post.comments.length} Comments
        </button>

        {showComments && (
          <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
            {post.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
