import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={201.48}
        height={148}
        className="hidden sm:block"
      />
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="block sm:hidden"
      />
    </Link>
  );
}
