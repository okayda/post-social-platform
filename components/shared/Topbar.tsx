import { UserButton, SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={36} height={36} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Post Social Platform
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
}
