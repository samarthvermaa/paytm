import { useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div>Welcome to PayTm!!</div>
        <div>
          <div className="p-2 flex justify-evenly">
            <Button
              onClick={() => {
                navigate("signup");
              }}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                navigate("signin");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
