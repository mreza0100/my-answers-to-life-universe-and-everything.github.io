import { ArticlesKeys } from "../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { LogoType, NavbarType } from "./enums";

export interface IAuthor {
	profilePic?: string;
	name: string;
	designation?: string;
	bio?: string;
	social?: iNavSocials[];
}

export interface IArticleHeaderData {
	author: IAuthor;
	date: string;
	articleTitle: string;
	tags: string;
	thumbnail: string;
	shortIntro: string;
	category?: string;
}

export type IArticleBranch = {
	key: ArticlesKeys;
	title?: string;
	children?: IArticlesTree;
	url?: string;
	id?: string;
	shallow?: boolean;
};

export type IArticlesTree = (IArticleBranch | ArticlesKeys)[];

export interface iArticle {
	key: string;
	url: string;
	path: string;
	isPublished: boolean;
	featureArticle?: boolean;
	preview: IArticleHeaderData;
	seo?: iSEO;
}

export interface iSEO {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	twitterHandle?: string;
	author?: string;
	url?: string;
}

export interface iNavbar {
	openSearch: () => void;
	toggleSideMenu: () => void;
	changeTheme?: () => void;
	openSidebar: boolean;
	navSetup: iNavSetup;
	onShareClick: () => void;
}

export interface iNavSetup {
	type: NavbarType;
	navLinks: iNavLink[];
	sideNavLinks: iNavLink[];
	socials: iNavSocials[];
	logo: iNavLogo;
}

export interface iNavLogo {
	type: LogoType;
	logo: string;
	logoLight?: string;
}

export interface iNavLink {
	label: string;
	path: string;
	type?: string;
	newTab?: boolean;
}

export interface iNavSocials {
	link: string;
	icon: any;
}
