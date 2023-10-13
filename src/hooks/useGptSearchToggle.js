import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";

const useGptSearchToggle = () => {
    
    const dispatch = useDispatch();

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
      }
      return handleGptSearchClick;
}

export default useGptSearchToggle;
