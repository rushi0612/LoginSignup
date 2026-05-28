import React, { useState } from 'react'

const Login = ({ onLoginSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    setSuccessMsg('')
  }

  const validate = () => {
    const newErrors = {}
    if (!isLoginMode && !formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!isLoginMode) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const exists = users.find(u => u.email === formData.email)
      if (exists) {
        setErrors({ email: 'Email already registered' })
        return
      }
      users.push({ name: formData.name, email: formData.email, password: formData.password })
      localStorage.setItem('users', JSON.stringify(users))
      setSuccessMsg(`Account created! Welcome, ${formData.name} 🎉`)
      setFormData({ name: '', email: '', password: '', confirmPassword: '' })
      setTimeout(() => setIsLoginMode(true), 1500)
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(u => u.email === formData.email && u.password === formData.password)
      if (!user) {
        setErrors({ email: 'Invalid email or password' })
        return
      }
      // Go to dashboard
      onLoginSuccess(user)
    }
  }

  const switchMode = () => {
    setIsLoginMode(!isLoginMode)
    setErrors({})
    setSuccessMsg('')
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      </div>

      <div className="relative flex h-12 border border-gray-300 rounded-full overflow-hidden mb-4">
        <button type="button" onClick={switchMode} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? 'text-white' : 'text-black'}`}>
          Login
        </button>
        <button type="button" onClick={switchMode} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? 'text-white' : 'text-black'}`}>
          Sign Up
        </button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${isLoginMode ? 'left-0' : 'left-1/2'}`}></div>
      </div>

      {successMsg && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm font-medium">
          {successMsg}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {!isLoginMode && (
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
              className={`w-full p-3 border-b-2 outline-none placeholder-gray-400 ${errors.name ? 'border-red-400' : 'border-gray-300 focus:border-cyan-500'}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
        )}

        <div>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
            className={`w-full p-3 border-b-2 outline-none placeholder-gray-400 ${errors.email ? 'border-red-400' : 'border-gray-300 focus:border-cyan-500'}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            className={`w-full p-3 border-b-2 outline-none placeholder-gray-400 ${errors.password ? 'border-red-400' : 'border-gray-300 focus:border-cyan-500'}`} />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {!isLoginMode && (
          <div>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}
              className={`w-full p-3 border-b-2 outline-none placeholder-gray-400 ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300 focus:border-cyan-500'}`} />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
        )}

        {isLoginMode && (
          <div className="text-right">
            <p className="text-cyan-600 hover:underline cursor-pointer text-sm">Forgot password?</p>
          </div>
        )}

        <button type="submit" className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-center text-gray-600 text-sm">
          {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={switchMode} className="text-cyan-600 hover:underline cursor-pointer font-medium">
            {isLoginMode ? 'Sign up now' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login