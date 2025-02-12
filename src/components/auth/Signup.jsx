import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
    return(
        <div className="min-h-screen grid place-items-center bg-cover bg-center bg-[url('/Users/brijeshshukla/Downloads/intern-project/src/asset/90872.jpg')]">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="bg-white shadow-2xl border border-gray-300 rounded-xl">
                    <SignUp
                    path="/sign-up"
                    afterSignOutUrl="/sign-in"
                    fallbackRedirectUrl={`/`}
                    routing="path"
                    />
                </div>
        </div>
    )
}
export default SignUpPage;