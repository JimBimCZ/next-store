import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

const Logo = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/">
        <IoMdHome />
      </Link>
    </Button>
  );
};

export default Logo;
