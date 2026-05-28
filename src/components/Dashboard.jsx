import React from 'react'

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="w-[480px] bg-white p-8 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-300 flex items-center justify-center text-white text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Welcome back,</p>
            <p className="text-xl font-semibold text-gray-800">{user.name} 👋</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm text-red-500 border border-red-400 rounded-full hover:bg-red-50 transition"
        >
          Logout
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-6"></div>

      {/* User Info Card */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
        <p className="text-xs text-gray-400 uppercase font-medium tracking-wide">Account Details</p>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-20">Name</span>
          <span className="text-gray-700 font-medium">{user.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-20">Email</span>
          <span className="text-gray-700 font-medium">{user.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-20">Status</span>
          <span className="text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            Active
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-blue-600">1</p>
          <p className="text-xs text-gray-500 mt-1">Projects</p>
        </div>
        <div className="bg-cyan-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-cyan-600">3</p>
          <p className="text-xs text-gray-500 mt-1">Tasks</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-green-600">✓</p>
          <p className="text-xs text-gray-500 mt-1">Verified</p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-400 text-xs">
        Logged in successfully · Auth via localStorage
      </p>
    </div>
  )
}

export default Dashboard