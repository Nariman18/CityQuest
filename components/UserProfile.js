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

          const passwordSuccess = () => {
            toast.success("The password has successfully changed", { duration: 4000 });
          };
        
          const passwordError = () => {
            toast.error("Your old password is incorrect. Please try again", { duration: 4000 });
          };

          const router = useRouter()
          const { user, updateUserProfile, updateUserProfileEmail, logout, updateUserProfilePassword} = useAuth();
          const [newName, setNewName] = useState('');
          const [newEmail, setNewEmail] = useState('');
          const [emailPassword, setEmailPassword] = useState('');
          const [newPassword, setNewPassword] = useState("");
          const [confirmPassword, setConfirmPassword] = useState("");
          const [oldPassword, setOldPassword] = useState("");

          const handleNameChange = (e) => {
              setNewName(e.target.value);
            };
          
            const handleEmailChange = (e) => {
              setNewEmail(e.target.value);
            };

            const handlePasswordConfirm = (e) => {
              setEmailPassword(e.target.value);
            };

            const handleOldPasswordCheck = (e) => {
              setOldPassword(e.target.value);
            }

            const handlePasswordChange = (e) => {
              setNewPassword(e.target.value);
            };
          
            const handleConfirmPasswordChange = (e) => {
              setConfirmPassword(e.target.value);
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
          
              if (emailPassword) {
                try {
                  await updateUserProfileEmail(newEmail, emailPassword);
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
            
            const handlePasswordSubmit = async (e) => {
              e.preventDefault();
          
              if (newPassword !== confirmPassword) {
                toast.error("Passwords do not match", { duration: 4000 });
                return;
              }
          
              try {
                await updateUserProfilePassword(oldPassword, newPassword);
                passwordSuccess()
                
                router.push('/dashboard')
              } catch (error) {
                passwordError()
                console.log(error)
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
                  <div className='relative flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-5 sm:p-6 p-7'>
                    
                          <h2 className='uppercase text-white pb-5 text-xl text-bold'>Изменение профиля</h2>

                          <div className=' relative 2xl:flex-row xl:flex-row 2xl:space-x-6 xl:space-x-6 lg:flex-row lg:space-x-6 md:flex-row md:space-x-2 sm:flex-col sm:space-x-2 items-center flex flex-col space-y-10 mb-4'>

                          
                          <form className='flex flex-col items-center' onSubmit={handleNameSubmit}>
                            <input onChange={handleNameChange} type="text" value={newName} required placeholder='Ваше новое имя' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Имя</button>
                            </form>

                            <form className='flex flex-col items-center' onSubmit={handleEmailSubmit}>  
                            <input onChange={handleEmailChange} type="email" value={newEmail} required placeholder='Ваша новая почта' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>
                            <input onChange={handlePasswordConfirm} type="password" value={emailPassword} required placeholder='Подтвердите ваш пароль' className='p-4 mt-3 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Почту</button>
                            </form>

                            <form className='flex flex-col items-center' onSubmit={handlePasswordSubmit}>  
                            <input onChange={handleOldPasswordCheck} type="password" value={oldPassword} required placeholder='Ваша старый пароль' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>
                            <input onChange={handlePasswordChange} type="password" value={newPassword} required placeholder='Ваша новый пароль' className='p-4 text-sm mt-3 outline-none w-[260px] bg-gray-800 text-white'></input>
                            <input onChange={handleConfirmPasswordChange} type="password" value={confirmPassword} required placeholder='Подтвердите ваш пароль' className='p-4 mt-3 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Пароль</button>
                            </form>

                          </div>

                      
                          
                  </div>
              </div>

          </div>
        )
      }

      export default UserProfile