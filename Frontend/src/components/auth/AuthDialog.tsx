import { Button } from "../ui/Button";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import BackButton from "./BackButton";

const AuthDialog = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState<boolean>();

  const handleLoginFormClick = () => {
    setIsLoginFormActive(true);
  }

  const handleRegisterFormClick = () => {
    setIsLoginFormActive(false);
  }

  const handleBackButtonClick = () => {
    setIsLoginFormActive(!isLoginFormActive);
  }
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center items-center gap-x-3 w-fit h-fit">
          <Button variant="link" size="link" onClick={handleLoginFormClick}>
            Sign in
          </Button>
          <Button variant="auth" size="wide" onClick={handleRegisterFormClick}>
            Get Started
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[380px] flex flex-col
         bg-[#C0E7B2]">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-[2.3rem] font-Pacifico">
            {isLoginFormActive ? "Sign In" : "Register"}
          </DialogTitle>
          <DialogDescription className="text-[#151515]">
            {isLoginFormActive ? "Welcome back" : "Create an account"}
          </DialogDescription>
        </DialogHeader>
        {isLoginFormActive ? <LoginForm /> : <RegisterForm />}
        <div className="flex justify-center mb-2">
          <BackButton 
            handleClick={handleBackButtonClick} 
            label={isLoginFormActive ? "Don't have an account?" : "Already have an account?"} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
