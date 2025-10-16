import { Input } from "@heroui/input";
import { Button, Divider, Link } from "@heroui/react";

import Logo from "/EXO_logo_green.png";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleIcon } from "@/components/icons";

export default function LoginPage() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/customers");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="relative flex flex-col h-full min-h-screen bg-brand-bg text-brand-text items-center justify-center">
      <div className="container mx-auto max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl p-3 rounded-2xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-lg">
        <div className="grid grid-rows-1 md:grid-cols-5">
          <div
            className="md:col-span-2
            bg-gradient-to-t from-brand-primary/80 to-[#38A169]/80 flex items-start justify-center p-8 h-full rounded-xl"
          >
            <img alt="Logo" className="h-[60px] md:h-[200px] mt-8" src={Logo} />
          </div>
          <div className="md:col-span-3 items-center justify-center flex flex-col gap-4 p-8 h-full">
            <form className="w-full md:px-4 lg:px-8" onSubmit={handleSubmit}>
              <span className="text-2xl font-bold mb-8 justify-center flex">
                Welcome
              </span>
              <div className="flex flex-col gap-4 mb-8">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired
                />
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired
                />
                <Link
                  className="text-brand-primary items-end justify-end flex text-sm"
                  href="#forgotpassword"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                fullWidth
                className="bg-brand-primary text-white"
                color="primary"
                type="submit"
                isLoading={isLoggingIn}
                variant="solid"
              >
                {isLoggingIn ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <div className="flex justify-center my-8">
              <Divider className="my-3" />
              <span className="px-2 whitespace-nowrap text-sm">
                Or continue with
              </span>
              <Divider className="my-3" />
            </div>
            <div className="flex gap-4">
              <Button variant="bordered">
                <GoogleIcon />
              </Button>
              {/* <Button fullWidth variant="bordered">
                GitHub
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
