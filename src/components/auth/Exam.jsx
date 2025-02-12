import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Exam() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}