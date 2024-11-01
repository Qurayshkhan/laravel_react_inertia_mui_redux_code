import { useSelector } from "react-redux";

const useSelectorHook = (sliceName) => {
    return useSelector((state) => state[sliceName]);
};

export default useSelectorHook;
