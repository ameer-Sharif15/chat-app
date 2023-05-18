import  { useState } from 'react'
import { RiLockPasswordFill } from 'react-icons/ri';
import { ameer } from '../assets';
import { MdEmail } from 'react-icons/md'
import { CiUser } from 'react-icons/ci'
import { useNavigate } from "react-router-dom";
import { createUsers, repo } from '../api/users';

const Sign = () => {
  const [toggleSign, setToggleSign] = useState(true);
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cheEmail, setCheEmail] = useState<string>('')
  const [chePassword, setChePassword] = useState<string>('')


    const navigate = useNavigate()
  const handleAdd =  (e: any) => {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * 99999999)
    const newVal: {
      name:string,
      email: string,
      password: string,
      id: number,
    } = {
        name: name,
        email: email,
        password: password,
        id: randomNumber
    }
    createUsers(newVal)
  }

  const handleCheck =  (e: any) => {
    e.preventDefault()
    const newVal: {
      email: string,
      password: string,
    } = {
        email: cheEmail,
        password: chePassword,
    }
        const item = repo.getOneBy(newVal)
        const isCorrect =  repo.getIsTrue(newVal)
        if (isCorrect) {
         const idd = item.id
         localStorage.setItem('id', JSON.stringify(idd))
      navigate('/home')
    } else {
      alert('wrong PASSWORD/EMAIL')
    }
  }

  return (
    <div
      className="w-[470.83px]  border border-[#BDBDBD] dark:border-[#BDBDBD] 
         rounded-3xl pt-[49px] bg-white my-[22px] mx-[auto]
        dark:bg-[#333333] px-[58.78px]  flex flex-col"
    >
      <div className="flex mb-[33.53px] items-center">
        <img
          src={ameer}
          alt="logo"
          style={{ width: "36.87px", height: "36px" }}
        />
        <h1 className="text-[#333333] dark:text-[#E0E0E0]">devchallenges</h1>
      </div>
      {toggleSign ? (
        <div className="flex flex-col  text-red-100 ">
          <h2
            className="text-[18px] font-sans leading-6 font-[600] 
               tracking-[-0.035em] w-[318.88px] mb-[14.5px] text-[#333333] dark:text-[#E0E0E0]"
          >
            Join thousands of learners from <br /> around the world
          </h2>
          <form onSubmit={(e) => handleAdd(e)} className="flex flex-col mb-[31.58px]">
            <div className="flex relative mb-[14px]">
              <CiUser className="absolute top-[14px] left-2 text-[20px]  fill-slate-400" />
              <input
                type="type"
                className="flex h-[48px] w-[369.06px] dark:text-white 
                           outline-none xs:w-[356.43px] dark:bg-[#333333] pl-8 text-black border"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex relative mb-[14px]">
              <MdEmail className="absolute top-[14px] left-2 text-[20px]  fill-slate-400" />
              <input
                type="email"
                className="flex h-[48px] w-[369.06px] dark:text-white 
                           outline-none xs:w-[356.43px] dark:bg-[#333333] pl-8 text-black border"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex relative mb-[14px]">
              <RiLockPasswordFill className="absolute top-[14px] left-2  text-[20px] fill-slate-400" />
              <input
                type="password"
                className="flex h-[48px] outline-none w-[369.06px]
                            dark:text-white xs:w-[356.43px] dark:bg-[#333333] pl-8 text-black border"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 text-[16px] leading-5 font-normal py-2"
            >
              Start coding now
            </button>
          </form>
          <p
            className="self-center text-[14px] 
                  leading-[19px] mb-[30.36px] tracking-[-0.035em] 
                  text-[#828282]"
          >
            or continue with these social profile
          </p>
          <div className="flex self-center items-center mb-4">
            <p
              className="text-[14px] 
                  leading-[19px]  tracking-[-0.035em] 
                  text-[#828282]"
            >
              Adready a member?
            </p>
            <p
              className="cursor-pointer"
              style={{ color: "#2D9CDB" }}
              onClick={() => setToggleSign(!toggleSign)}
            >
              Sign In
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  text-red-100 ">
          <h2
            className="text-[18px] font-sans leading-6 font-[600] 
           tracking-[-0.035em] w-[318.88px] mb-[14.5px] text-[#333333] dark:text-[#E0E0E0]"
          >
            Login
          </h2>
          <form onSubmit={(e) => handleCheck(e)} className="flex flex-col mb-[31.58px]">
            <div className="flex relative mb-[14px]">
              <MdEmail className="absolute top-[14px] left-2 text-[20px]  fill-slate-400" />
              <input
                type="email"
                className="flex h-[48px] dark:text-white 
                       outline-none w-[356.43px] dark:bg-[#333333] pl-8 text-black border"
                placeholder="Email"
                required
                value={cheEmail}
                onChange={(e) => setCheEmail(e.target.value)}
              />
            </div>
            <div className="flex relative mb-[14px]">
              <RiLockPasswordFill className="absolute top-[14px] left-2  text-[20px] fill-slate-400" />
              <input
                type="password"
                className="flex h-[48px] outline-none
                        dark:text-white w-[356.43px] dark:bg-[#333333] pl-8 text-black border"
                placeholder="password"
                required
                value={chePassword}
                onChange={(e) => setChePassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 text-[16px] leading-5 font-normal py-2"
            >
              Start coding now
            </button>
          </form>
          <p
            className="self-center text-[14px] 
              leading-[19px] mb-[30.36px] tracking-[-0.035em] 
              text-[#828282]"
          >
            or continue with these social profile
          </p>

          <div className="flex self-center items-center mb-4">
            <p
              className="text-[14px] 
              leading-[19px]  tracking-[-0.035em] 
              text-[#828282]"
            >
              Adready a member?
            </p>
            <p
              className="cursor-pointer"
              style={{ color: "#2D9CDB" }}
              onClick={() => setToggleSign(!toggleSign)}
            >
              Register
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sign