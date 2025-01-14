import { ArticlesKeys } from "../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { DEFAULT_SEO } from "../../BLOG_CONSTANTS/_BLOG_SETUP";
import { Image, PageLayout, Text } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";

export const BodyMetadata = {
	key: ArticlesKeys.Body,
	url: "/life/body",
	path: "/pages/life/body.tsx",
	featureArticle: false,
	isPublished: true,
	date: "May 19 2024",
	articleTitle: "Body",
	tags: "Spinoza, Ethics, Body, Mode, Substance",
	thumbnail: "/public/images/body.webp",
	shortIntro: "Spinoza's view on the body and how it is a mode of substance",
	category: "Life",
};

const content = `
### Requirements to know:

- [Universe](/universe/)
- [Causality](/universe/causality/)
- [Life](/life/)

# Body

So far we talked that everything is substance, such as door and your body.

Now we talk about body as the mode of substance.

> [2D1](https://ethica.bc.edu/#/element/2D1) - By body I understand a mode which expresses in a certain and determinate manner the essence of God, in so far as he is considered as an extended thing.

Body is a mode of substance, which is an expression of God's essence in a certain and determinate manner, in so far as he is considered as an extended thing.
What is a extend thing? it's a thing that has a length, width, and height.

> [2D2](https://ethica.bc.edu/#/element/2D2) - I say it expresses in a certain and determinate manner the essence of God, in so far as he is considered as an extended thing, in so far, I repeat, as he is displayed through the attributes of extension.

Body expresses in a certain and determinate manner the essence of God( substance ), in so far as he is considered as an extended thing, in so far as he is displayed through the attributes of extension.

If you want to know more of body and connections to mind, you can read [mind](/life/mind)

`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/body.webp"
					alt="universe"
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
