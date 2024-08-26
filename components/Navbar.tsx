import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        {/* logo */}
        {/* 注意由于资源房放置在public目录下，会自动暴露，通过URL即可直接访问 */}
        {/* 因此获取时填写URL路径/jsm-logo.svg，而不是文件路径.jsm-logo.svg */}
        <Link href="/">
          <Image
            src="/jsm-logo.svg"
            alt="logo"
            width={55}
            height={40}
          />
        </Link>
        {/* 面包屑导航，屏幕变窄才展示 */}
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="hamburger menu"
          className="block md:hidden"
        />
      </div>

    </nav>
  )
}