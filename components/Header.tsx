import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <div className="flex justify-between bg-white dark:bg-[#232f3c] shadow-sm p-5 border-b border-gray-400">
      <Link
        href="/dashboard"
        className="text-2xl dark:text-white font-semibold"
      >
        Chat to <span className="text-orange-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          {/* Theme Mode */}
          <ThemeToggle />

          <Button
            asChild
            variant="link"
            className="hidden lg:flex dark:bg-orange-200"
          >
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="dark:bg-orange-200 border-orange-200 text-orange-600 hover:text-orange-600 dark:hover:bg-orange-300 transition-all duration-300"
          >
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-orange-600 dark:bg-orange-200 dark:hover:bg-orange-300 transition-all duration-300"
          >
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-orange-600" />
            </Link>
          </Button>

          {/* Upgrade Button */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
