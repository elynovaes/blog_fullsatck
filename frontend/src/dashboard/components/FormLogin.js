import React from 'react'
import Notification from './Forms/Notification'

const FormLogin = ({ handleLogin, username, onChangeUsername, password, onChangePassword, message, timeAnimation }) => {
  return (
    <div className="flex items-center h-full justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Notification message={message} timeAnimation={timeAnimation} className='z-50'/>
      <div className="max-w-md w-96 space-y-8 bg-black bg-opacity-80 px-5 py-10 rounded-xl backdrop-blur-sm z-0">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sing in</h2>
        </div>

        <form className="mt-8 space-y-12" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-5 text-white">
            <div>
              <p className="mb-1">Nome de usuário</p>
              <input 
                value={username}
                name="Username"
                type="text"
                required
                onChange={onChangeUsername}
                className="appearance-none bg-black relative block w-full px-3 py-3 border border-white placeholder-gray-500 placeholder:text-center placeholder:bg-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Escreva o nome de usuário"
              />
            </div>
            <div>
              <p className="mb-1">Senha</p>
              <input 
                value={password}
                name="password"
                type="password"
                required
                onChange={onChangePassword}
                className="appearance-none bg-black relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 placeholder:text-center text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
