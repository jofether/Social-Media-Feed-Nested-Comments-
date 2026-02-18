import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';

const postsData = [
  {
    author: 'Sarah Chen',
    handle: 'sarahchen',
    initials: 'SC',
    avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
    verified: true,
    timestamp: '2 hours ago',
    content: 'Just shipped a major performance update to our search infrastructure! Reduced query latency by 40% with HNSW indexing. Our users are going to love this speed boost. 🚀',
    image: 'Performance Dashboard',
    imageEmoji: '📊',
    views: '1.2M',
    retweets: '2.4K',
    replies: '487',
    likes: '8.9K',
    hashtags: ['#WebDevelopment', '#Performance', '#React'],
    comments: [
      {
        author: 'Mark Johnson',
        handle: 'markjohnson',
        initials: 'MJ',
        avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
        timestamp: '1h ago',
        text: 'Wow! What indexing method did you end up using? Was considering FAISS vs HNSW myself.',
        likes: '234',
        replies: [],
      },
      {
        author: 'Alex Dev',
        handle: 'alexdev',
        initials: 'AD',
        avatarBg: 'bg-gradient-to-br from-orange-400 to-red-500',
        timestamp: '45m ago',
        text: 'This is amazing! Do you have any open positions in your team? 😄',
        likes: '156',
        replies: [
          {
            author: 'Sarah Chen',
            handle: 'sarahchen',
            initials: 'SC',
            avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
            timestamp: '30m ago',
            text: 'Thanks! We\'re always looking for talented engineers. Check out our careers page!',
            likes: '89',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    author: 'Emma Wilson',
    handle: 'emmawilson',
    initials: 'EW',
    avatarBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    verified: false,
    timestamp: '4 hours ago',
    content: 'Finally finished refactoring our CSS architecture! Went from BEM to Tailwind CSS and I\'m never looking back. The developer experience improvement is INSANE. Code is more maintainable, components are reusable, and the learning curve is so much gentler for new team members.',
    image: 'CSS Architecture',
    imageEmoji: '🎨',
    views: '890K',
    retweets: '1.2K',
    replies: '312',
    likes: '5.6K',
    hashtags: ['#CSS', '#TailwindCSS', '#WebDev'],
    comments: [
      {
        author: 'James Miller',
        handle: 'jamesmiller',
        initials: 'JM',
        avatarBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
        timestamp: '3h ago',
        text: 'Tailwind is absolute game-changer! Our design system matured so much faster.',
        likes: '412',
        replies: [
          {
            author: 'Emma Wilson',
            handle: 'emmawilson',
            initials: 'EW',
            avatarBg: 'bg-gradient-to-br from-teal-400 to-green-500',
            timestamp: '2h ago',
            text: 'Right?! And the utility-first approach makes it so easy to prototype quickly.',
            likes: '267',
            replies: [],
          },
          {
            author: 'Lisa Park',
            handle: 'lisapark',
            initials: 'LP',
            avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
            timestamp: '1h ago',
            text: 'The only downside is the file size, but with tree-shaking it\'s not even noticeable.',
            likes: '189',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    author: 'David Kumar',
    handle: 'davidkumar',
    initials: 'DK',
    avatarBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    verified: false,
    timestamp: '6 hours ago',
    content: 'Building a real-time collaboration feature with WebSockets. The synchronization challenges are real, but implementing eventual consistency patterns has been fascinating. This is why I love working on systems design problems!',
    image: null,
    views: '345K',
    retweets: '892',
    replies: '234',
    likes: '3.2K',
    hashtags: ['#SystemsDesign', '#WebSockets', '#RealTime'],
    comments: [
      {
        author: 'Nina Patel',
        handle: 'ninapatel',
        initials: 'NP',
        avatarBg: 'bg-gradient-to-br from-lime-400 to-emerald-500',
        timestamp: '5h ago',
        text: 'Have you considered using Operational Transformation vs CRDT for your sync strategy?',
        likes: '178',
        replies: [
          {
            author: 'David Kumar',
            handle: 'davidkumar',
            initials: 'DK',
            avatarBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
            timestamp: '4h ago',
            text: 'Great question! We started with OT but switched to CRDT. The merge semantics are much cleaner.',
            likes: '234',
            replies: [],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <RightSidebar />

      {/* Main Feed */}
      <div className="lg:ml-64 xl:mr-80 pt-20 px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <CreatePost />
          {postsData.map((post, idx) => (
            <Post key={idx} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;