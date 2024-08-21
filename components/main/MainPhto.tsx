import React from 'react';

function MainPhto() {
  return (
    <div 
      className="relative w-full h-[140vh] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('/premium_photo-1706807135398-31770beffb74.avif')` }} // High-resolution image path
    >
      {/* Dark gradient overlay for the entire image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      
      {/* Text content centered on the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4">
        <h1 className="text-5xl font-bold">THILINA PERERA</h1>
        <p className="text-xl">Full-Stack Developer | DevOps Enthusiast | AWS Cloud Enthusiast</p>
        <a 
          href="#"
          className="mt-4 inline-flex items-center text-sm font-medium text-white underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H8l4-4 4 4h-3v4z" />
          </svg>
          Download my resume
        </a>
      </div>
    </div>
  );
}

export default MainPhto;
