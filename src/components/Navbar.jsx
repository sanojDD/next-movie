import NavbarItem from "./NavbarItem";
export default function Navbar() {
  return (
    <div
      className="flex p-4 lg:text-lg justify-center gap-6 
  bg-gradient-to-r from-amber-200 via-pink-100 to-rose-200 
  dark:from-gray-500 dark:via-gray-600 dark:to-gray-900"
    >
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="rated" />
    </div>
  );
}
