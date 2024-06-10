// import React, { useState, useEffect } from 'react';
// import { createClient } from "@/utils/supabase/client";

// const LevelCard = () => {
//     const supabase = createClient();
//     const [userLevels, setUserLevels] = useState([]);


//   useEffect(() => {
//     const fetchUserLevels = async () => {
//       const { data, error } = await supabase
//         .from('Users')
//         .select('Easylevel, Mediumlevel, Hardlevel');

//       if (error) {
//         console.error('error fetching user levels:', error);
//       } else {
//         setUserLevels(data);
//       }
//     };

//     fetchUserLevels();
//   }, [supabase]);

//   return (
//     <div className="flex flex-col gap-4">
//       {userLevels.map((user) => (
//         <div key={user.id} className="bg-gray-100 rounded-lg shadow-md px-4 py-6 flex items-center">
//           <div className="flex-grow">
//             <p className="text-lg font-medium">{user.level}</p>
//           </div>
//           <div className="flex items-center text-gray-500 text-sm">
//             <LevelProgressBar level={user.level} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const LevelProgressBar = ({ level }) => {

//   let progressClassName;
//   switch (level.toLowerCase()) {
//     case 'easy':
//       progressClassName = 'bg-green-500';
//       break;
//     case 'medium':
//       progressClassName = 'bg-yellow-500';
//       break;
//     case 'hard':
//       progressClassName = 'bg-red-500';
//       break;
//     default:
//       progressClassName = 'bg-gray-200';
//   }

//   return (
//     <div className="w-full h-2 rounded-full">
//       <div className={`${progressClassName} w-1/3`}></div>
//     </div>
//   );
// };

// export default LevelCard;