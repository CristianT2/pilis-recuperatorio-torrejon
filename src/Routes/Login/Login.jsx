import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Contexts/UserContext';

const Login = () => {

  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className='container mx-auto w-80 justify-center bg-zinc-100'>
      <div className=''>
        <h1 className='justify-center text-3xl pt-4 font-semibold my-9'>Log In</h1>
        <form className='mx-auto items-center max-w-md' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-6 mx-auto w-72'>
            <input
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
              type="text"
              placeholder='User name'
              {...register('username', {
                required: 'You must enter your user'
              })
              }
            />
            <p className='text-red-700 text-start pt-0'>{errors.username?.message}</p>
          </div>
          <div className='my-6 mx-auto w-72'>
            <input
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
              type='password'
              placeholder='Password'
              {...register(
                'password',
                {
                  required: 'You must enter your password'
                }
              )}
            />
            <p className='text-red-700 text-start'>{errors.password?.message}</p>
          </div>
          <button className='className="mx-auto bg-green-700 hover:bg-green-800 rounded-full p-2 px-5 text-xl font-medium text-white m-4' type='submit'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login;