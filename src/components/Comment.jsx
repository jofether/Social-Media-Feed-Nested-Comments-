import React, { useState } from 'react';

export default function Comment({ comment, isReply = false, depth = 0 }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const paddingLeft = depth * 1.5;

  return (
    <div style={{ paddingLeft: `${paddingLeft}rem` }} className="mb-4">
      <div className="flex space-x-3">
        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm ${comment.avatarBg}`}>
          {comment.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`p-3 rounded-xl ${
            isReply 
              ? 'bg-gray-50 border border-gray-200' 
              : 'bg-gray-100'
          }`}>
            <div className="flex items-center space-x-2 mb-1">
              <p className="text-sm font-bold text-gray-900">{comment.author}</p>
              <span className="text-xs text-gray-500">@{comment.handle}</span>
              <span className="text-xs text-gray-500">·</span>
              <span className="text-xs text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-sm text-gray-700 leading-normal">{comment.text}</p>
            {comment.image && (
              <div className="mt-2 w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                {comment.image}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-6 mt-2 text-xs text-gray-500">
            <button className="hover:text-blue-500 transition flex items-center space-x-1">
              <span>❤️</span>
              <span>{comment.likes}</span>
            </button>
            <button 
              onClick={() => setIsReplying(!isReplying)}
              className="hover:text-blue-500 transition"
            >
              💬 Reply
            </button>
          </div>

          {isReplying && (
            <div className="mt-3 flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex-shrink-0"></div>
              <div className="flex-1">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={2}
                />
                <div className="mt-2 flex justify-end space-x-2">
                  <button 
                    onClick={() => {
                      setIsReplying(false);
                      setReplyText('');
                    }}
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded transition"
                  >
                    Cancel
                  </button>
                  <button 
                    className={`px-4 py-1 rounded text-sm font-semibold transition ${
                      replyText.trim()
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!replyText.trim()}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-3">
          {comment.replies.map((reply, idx) => (
            <Comment key={idx} comment={reply} isReply={true} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
