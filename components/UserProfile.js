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
                  router.push('/dashboard')
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
              <div className=' h-full w-full relative flex items-center justify-center'>
                  <Image src='/img/Aze.jpeg'
                          fill
                          alt="logo"
                          className=" object-cover"
                          
                  />
                  <div className='relative flex flex-col items-center bg-[#171717]/90'>
                    
                          <h2 className='uppercase text-white p-5 mt-5 text-xl text-bold'>Change Profile</h2>

                          <div className=' relative flex flex-col'>

                          
                          <form className='flex flex-col items-center p-8' onSubmit={handleNameSubmit}>
                            <input onChange={handleNameChange} type="text" value={newName} required placeholder='Your new name' className='p-4 text-sm w-[260px] outline-none bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Change name</button>
                            </form>

                            <form className='flex flex-col items-center p-8' onSubmit={handleEmailSubmit}>  
                            <input onChange={handleEmailChange} type="email" value={newEmail} required placeholder='Your new email' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>
                            <input onChange={handlePasswordConfirm} type="password" value={emailPassword} required placeholder='Confirm your password' className='p-4 mt-3 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Change Email</button>
                            </form>

                            <form className='flex flex-col items-center mb-10 p-8' onSubmit={handlePasswordSubmit}>  
                            <input onChange={handleOldPasswordCheck} type="password" value={oldPassword} required placeholder='Your old password' className='p-4 w-[260px] text-sm outline-none bg-gray-800 text-white'></input>
                            <input onChange={handlePasswordChange} type="password" value={newPassword} required placeholder='Your new password' className='p-4 w-[260px] text-sm mt-3 outline-none bg-gray-800 text-white'></input>
                            <input onChange={handleConfirmPasswordChange} type="password" value={confirmPassword} required placeholder='Confirm your password' className='p-4 w-[260px] mt-3 text-sm outline-none bg-gray-800 text-white'></input>

                            <button type='submit' className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Change password</button>
                            </form>

                          </div>

                      
                          
                  </div>
              </div>

          </div>
        )
      }

      export default UserProfile