import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className='flex flex-row justify-center min-w-full p-5 bg-white dark:bg-black'>
      <p>
        2021 Lead Strategy LLC <span className='font-bold text-red-500'>Confidential & Proprietary</span>
      </p>
    </section>
  );
};

export default Footer;
