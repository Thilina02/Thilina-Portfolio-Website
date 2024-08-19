import React from 'react';

function MainPhto() {
  return (
    <div 
      className="relative w-full h-[140vh] bg-cover bg-center bg-no-repeat" // Ensures the image covers the area and does not repeat
      style={{ backgroundImage: `url('/ttttt.jpg')` }} // Path relative to public
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <p className="text-white text-center text-lg p-4">
          Your paragraph text goes here. This text will appear over the image.
        </p>
      </div>
    </div>
  );
}

export default MainPhto;
