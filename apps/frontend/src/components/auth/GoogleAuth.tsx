import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

export default function GoogleAuth () {
    return (
        <div className="flex justify-center items-center">
            <Link href="/google">
                <div className="w-16 h-16 bg-red-500 rounded-full flex justify-center items-center">
                <IconBrandGoogle className="text-white" size={24} />
                </div>
            </Link>
        </div>
    )
}