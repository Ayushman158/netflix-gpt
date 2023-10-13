import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import useGptSearchToggle from "../hooks/useGptSearchToggle";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toggleGpt = useGptSearchToggle();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      //Unsubscribe when component unmounts
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img src={LOGO_URL} alt="logo-header" className="w-44 " />
      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-gray-900 opacity-90 text-white m-2 rounded-sm"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifiers} value={lang.identifiers}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-violet-800 text-white rounded-lg"
            onClick={toggleGpt}
          >
            {showGptSearch ? "Browse Movies " : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="user-icon" className="w-12 h-12" />
          <button
            onClick={handleSignOut}
            className="text-lg font-bold text-white mb-2 ml-2"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
