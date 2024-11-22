
import Image from 'next/image';
import React from 'react';

function Skills() {
  return (
    <div className="h-auto md:h-[80vh] flex flex-col justify-center items-center gap-8 py-8 md:gap-12 bg-[#d8e7ec]">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 md:gap-8 items-center text-center px-4">
        <p className="text-xl md:text-2xl font-bold text-[#457B9D]">Skills</p>
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          What I am capable of?
        </h1>
      </div>
      {/* Skills Icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
        <Image src="/logo_html 1.png" width={80} height={70} alt="HTML logo" />
        <Image src="/CSS.png" width={80} height={70} alt="CSS logo" />
        <Image
          src="/typescript.png"
          width={120}
          height={30}
          alt="TypeScript logo"
          className="bg-transparent"
        />
        <Image src="/react.png" width={100} height={70} alt="React logo" />
        <Image
          src="/tailwindcss.png"
          width={140}
          height={40}
          alt="Tailwind CSS logo"
        />
        <Image src="/next.png" width={160} height={60} alt="Next.js logo" />
      </div>
      
    </div>
    
  );
}

export default Skills;


// import Image from 'next/image'
// import React from 'react'

// function Skills() {
//   return (
//     <div className='h-[80vh] flex flex-col justify-center items-center gap-12  bg-[#d8e7ec]'>
//         <div className='flex flex-col gap-8 items-center'>
//             <p className='text-2xl font-bold text-[#457B9D]'>Skills</p>
//             <h1 className="text-4xl font-bold text-black">What I am capable of?</h1>
//         </div>
//         <div className='flex gap-5 cursor-pointer'>
//             <Image src='/logo_html 1.png' width={100} height={90} alt='html logo'/>
//             <Image src='/CSS.png' width={100} height={90} alt='html logo' />
//             <Image src='/typescript.png' width={150} height={40} alt='html logo' className='bg-transparent'/>
//             <Image src='/react.png' width={120} height={90} alt='html logo'/>
//             <Image src='/tailwindcss.png' width={170} height={50} alt='html logo'/>
//             <Image src='/next.png' width={190} height={70} alt='html logo'/>
//         </div>
//     </div>
//   )
// }

// export default Skills
