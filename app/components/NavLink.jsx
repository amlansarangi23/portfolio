import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#f2eff0] sm:text-xl rounded md:p-0 hover:text-slate-400 duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;