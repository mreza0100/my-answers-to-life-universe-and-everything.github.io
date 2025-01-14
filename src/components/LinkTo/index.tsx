import Link from "next/link";
import { combineClasses, transformPath } from "../../utils/utils";
import { useRouter } from "next/router";

interface iLinkTo {
	href: string;
	passHref?: boolean;
	newTab?: boolean;
	children?: any;
	external?: boolean;
	className?: string;
}

const LinkTo = ({
	href,
	passHref = true,
	newTab = false,
	children,
	className,
}: iLinkTo) => {
	return (
		<>
			{newTab ?
				<a
					href={transformPath(href)}
					className={className}
					target="_blank"
					rel="noopener noreferrer">
					{children}
				</a>
			:	<Link href={transformPath(href)} passHref={passHref}>
					<a className={combineClasses("cursor-pointer hover:text-blue-500", className)}>
						{children}
					</a>
				</Link>
			}
		</>
	);
};

export default LinkTo;
