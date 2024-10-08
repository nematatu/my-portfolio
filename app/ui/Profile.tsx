import Image from 'next/image'
import profileSVG from '@/public/icon.svg'
import '@/app/styles/Profile.css'
import Link from 'next/link'
import {Icon} from '@iconify/react'
import pythonIcon from '@iconify-icons/logos/python'
import  typeScriptIcon from '@iconify-icons/logos/typescript-icon'
import awsIcon from '@iconify-icons/logos/aws'
import shellScriptIcon from '@iconify-icons/logos/bash-icon'

interface Skills {
  name: string;
  icon: React.ElementType;
}

const SkillIcons: { [key: string]: Skills } = {
  "TypeScript": { name: 'TypeScript', icon: ()=><Icon icon={typeScriptIcon}/ >},
  "Python": { name: 'Python', icon: ()=><Icon icon={pythonIcon}/ >},
  "AWS": { name: 'AWS', icon: ()=><Icon icon={awsIcon}/ >},
  "ShellScript": { name: 'ShellScript', icon: ()=><Icon icon={shellScriptIcon}/ >},
};

export default function Profile() {
  return (
    <section id="Profile" className="offset-anchor  py-16 relative z-30">
      <h2 className="text-5xl font-bold text-center mb-[8rem]">Profile</h2>
      <div className='md:px-[9rem] flex flex-col lg:flex-row items-center  justify-between '>
        <Image src={profileSVG} alt='profile' className='circle' width={260} />
        <div className='flex flex-col space-y-8  '>
          <div className='underline-profile mb-[1rem] flex flex-col md:flex-row items-center md:space-x-12  justify-between w-full'>
            <h1 className='font-bold text-3xl my-8 md:my-0'>
              あまたつ amatatu
            </h1>
            <div className='flex  space-x-4 '>
              <Link href="https://twitter.com/T_kanntoku" target="_blank" rel="noopener noreferrer" className="hover-effect border border-transparent hover:border hover:border-gray-300 p-1 rounded">
                <Image src='/sns/x.svg' alt='twitter' width={40} height={40} />
              </Link>
              <Link href="https://zenn.com/ama" target="_blank" rel="noopener noreferrer" className="hover-effect border border-transparent hover:border hover:border-gray-300 p-1 rounded">
                <Image src='/sns/zenn.svg' alt='twitter' width={40} height={40} />
              </Link>
              <Link href="https://github.com/nematatu" target="_blank" rel="noopener noreferrer" className="hover-effect border border-transparent hover:border hover:border-gray-300 p-1 rounded">
                <Image src='/sns/github.svg' alt='github' width={40} height={40} />
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-[auto,1fr] gap-x-4 gap-y-6 items-center '>
            <h1 className='font-bold text-2xl text-gray-300 text-right '>
              Age :
            </h1>
            <div className='text-[1rem] md:text-[1.2rem] flex  space-x-4 '>
              <p>
                21
              </p>
            </div>
            <h1 className='font-bold text-2xl text-gray-300 text-right'>
              Skills :
            </h1>
            <div className='text-[1rem] md:text-[1.2rem] flex  space-x-4 '>
              {Object.values(SkillIcons).map((skill, index) => (
                <div key={index} className='flex items-center space-x-2'>
                  <skill.icon />
                </div>
              ))}
            </div>
            <h1 className='font-bold text-2xl text-gray-300 text-right'>
              Hobby :
            </h1>
            <div className='text-[1rem] md:text-[1.2rem] flex  space-x-4 '>
              <p>
                Badminton 🏸
              </p>
              <p>
                Photography 📸
              </p>
            </div>

            <h1 className='font-bold text-2xl text-gray-300 text-right'>
              Music :
            </h1>
            <div className='text-[1rem] md:text-[1.2rem] flex  space-x-4 '>
              <p>
                Yorushika
              </p>
              <p>
                ZTMY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}