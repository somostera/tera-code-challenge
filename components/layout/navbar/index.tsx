import Icon from "@/components/common/icon";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-6 py-4 shadow-sm bg-white">
      <div className="container mx-auto">
        <Link href="/">
          <Icon
            name="logoColor"
            className="h-10 w-40 cursor-pointer"
            viewBox="0 0 422 116"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
