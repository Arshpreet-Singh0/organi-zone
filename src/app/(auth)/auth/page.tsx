import Signin from "@/components/Signin";
import { Suspense } from "react";

const SigninPage = async () => {
  return <Suspense> <Signin /> </Suspense>;
};

export default SigninPage;