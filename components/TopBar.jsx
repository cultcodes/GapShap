 "use client";

// import { Logout } from "@mui/icons-material";
// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const TopBar = () => {
//   const pathname = usePathname();

//   const handleLogout = async () => {
//     signOut({ callbackUrl: "/" });
//   };

//   const { data: session } = useSession();
//   const user = session?.user;

//   return (
//     <div className="topbar">
//       <Link href="/chats">
//         <img src="/assets/logo.png" alt="logo" className="logo" />
//       </Link>

//       <div className="menu">
//         <Link
//           href="/chats"
//           className={`${
//             pathname === "/chats" ? "text-red-1" : ""
//           } text-heading4-bold`}
//         >
//           Chats
//         </Link>
//         <Link
//           href="/contacts"
//           className={`${
//             pathname === "/contacts" ? "text-red-1" : ""
//           } text-heading4-bold`}
//         >
//           Contacts
//         </Link>

//         <Logout
//           sx={{ color: "#737373", cursor: "pointer" }}
//           onClick={handleLogout}
//         />

//         <Link href="/profile">
//           <img
//             src={user?.profileImage || "/assets/person.jpg"}
//             alt="profile"
//             className="profilePhoto"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopBar;









import { Logout, Brightness4, Brightness7 } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const TopBar = () => {
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", darkMode);
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className={`topbar ${darkMode ? "dark-mode" : ""}`}>
      <Link href="/chats">
        <img src="/assets/logo.png" alt="logo" className="logo" />
      </Link>

      <div className="menu">
        <Link
          href="/chats"
          className={`${
            pathname === "/chats" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === "/contacts" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Contacts
        </Link>
        
        <div
          sx={{ color: "#737373", cursor: "pointer" }}
          onClick={toggleDarkMode}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </div>

        <Logout
          sx={{ color: "#737373", cursor: "pointer" }}
          onClick={handleLogout}
        />

        <Link href="/profile">
          <img
            src={user?.profileImage || "/assets/person.jpg"}
            alt="profile"
            className="profilePhoto"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
