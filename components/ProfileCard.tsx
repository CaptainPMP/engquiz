// import React, { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';


// return (
//     <div className="flex justify-center space-x-4 p-6 bg-custom-color min-h-screen">
//       <div className="bg-white rounded-lg shadow-lg p-6 text-center w-1/3">
//         <h2 className="text-2xl font-bold">{profile.username}</h2>
//         <p className="mt-4 text-sm text-gray-500">See more</p>
//       </div>
//       <div className="bg-white rounded-lg shadow-lg p-6 text-center w-1/3">
//         <h2 className="text-lg font-bold">Latest test</h2>
//         <p className="text-2xl mt-2">{profile.latest_test || 'N/A'}</p>
//         <p className="mt-4 text-sm text-gray-500">See more</p>
//       </div>
//       <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
//         <h2 className="text-lg font-bold mb-4">Levels</h2>
//         <div className="mb-2">
//           <div className="flex justify-between mb-1">
//             <span>Easy</span>
//             <span>Level {profile.easy_level}</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${profile.easy_level}%` }}></div>
//           </div>
//         </div>
//         <div className="mb-2">
//           <div className="flex justify-between mb-1">
//             <span>Med</span>
//             <span>Level {profile.med_level}</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${profile.med_level}%` }}></div>
//           </div>
//         </div>
//         <div>
//           <div className="flex justify-between mb-1">
//             <span>Hard</span>
//             <span>Level {profile.hard_level}</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${profile.hard_level}%` }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;