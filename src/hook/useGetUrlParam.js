import { useLocation } from "react-router-dom";

const useGetUrlParam = (param) => new URLSearchParams(useLocation().search).get(param);

export default useGetUrlParam;