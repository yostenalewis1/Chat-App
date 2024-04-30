import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProps) => {
    const navigate = useNavigate();
    const {name} = useSelector((state: RootState) => state.user);
    const isAllowed = name !== "";

    useEffect(() => {
        if (!isAllowed) {
            navigate("/");
        }
    }, [isAllowed, navigate]);

  return children;
};

export default ProtectedRoute;