import Link from "next/link";

const ButtonCard = ({
    text,
    href
}: {
    text: string;
    href: string;
}) => {
    return (
        <Link href={href} passHref target="_blank">
            <button className="bg-yellow-600 h-10 w-32 rounded-md mt-7 hover:bg-yellow-700 active:opacity-[0.9] transition-all duration-300 text-gray-200">
                {text}
            </button>
        </Link>
    );
};

export default ButtonCard;
