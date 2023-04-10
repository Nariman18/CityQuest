import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

function UserProfile() {
    const nameSuccess = () => {
      toast.success("The name has successfully changed", { duration: 4000})
    }

    const nameError = () => {
      toast.error("Something went wrong. Please try again", { duration: 4000})
    }

    const emailSuccess = () => {
      toast.success("The email has successfully changed", { duration: 4000})
    }

    const emailPasswordError = () => {
      toast.error("Your password is incorrect. Please try again", { duration: 4000})
    }

    const emailTechError = () => {
      toast.error("Something went wrong. Please try again", { duration: 4000})
    }

    const router = useRouter()
    const { user, updateUserProfile, updateUserProfileEmail, logout } = useAuth();
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setNewName(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
      };

      const handlePasswordConfirm = (e) => {
        setPassword(e.target.value);
      };
   
      const handleNameSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(newName)
          .then(() => {
            nameSuccess()
            router.push("/dashboard");
          })
          .catch(() => {
            nameError()
          });
      };
      
      const handleEmailSubmit = async (e) => {
        e.preventDefault();
    
        if (password) {
          try {
            await updateUserProfileEmail(newEmail, password);
            emailSuccess()
            logout()
            router.push('/SignIn')
          } catch  {
            emailPasswordError()
          }
        } else {
          emailTechError()
        }
      };


  return (
    <div>
      <Toaster position='bottom-center' reverseOrder={false} />
        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <div className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Изменение профиля</h2>

                    <div className='flex flex-col space-y-10 mb-4'>

                    
                    <form className='flex flex-col items-center' onSubmit={handleNameSubmit}>
                      <input onChange={handleNameChange} type="text" value={newName} required placeholder='Ваше новое имя' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                      <button type='submit' className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Имя</button>
                      </form>

                      <form className='flex flex-col items-center' onSubmit={handleEmailSubmit}>  
                      <input onChange={handleEmailChange} type="email" value={newEmail} required placeholder='Ваша новая почта' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>
                      <input onChange={handlePasswordConfirm} type="password" value={password} required placeholder='Подтвердите ваш пароль' className='p-4 mt-3 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                      <button type='submit' className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Почту</button>
                      </form>


                    </div>

                    <div className='flex space-x-36'>
                      
    
                    </div>
                    
            </div>
        </div>

    </div>
  )
}

export default UserProfile