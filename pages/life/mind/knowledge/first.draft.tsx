import { ArticlesKeys } from "../../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../../../src/components";
import Markdown from "../../../../src/components/Markdown";
import { ImageSize } from "../../../../src/shared/enums";
import { EthSts } from "../../../../src/utils/markdown";

export const KnowledgeFirstMetadata = {
	key: ArticlesKeys.KnowledgeFirst,
	url: "/life/mind/knowledge/first",
	path: "/life/mind/knowledge/first.tsx",
	featureArticle: true,
	isPublished: false,
	date: "Jun 14 2024",
	articleTitle: "First kind of knowledge",
	tags: "Spinoza, Ethics, first kind of knowledge",
	thumbnail: "/public/images/spinoza-ethics.jpg", // TODO
	shortIntro: "", // TODO
	category: "Life",
};

const content = [
	`
Opinions
Disorganized confused knowledge


at all events, assuredly attaches a meaning to the word circle different from that assigned by mathematicians. So again, when men make mistakes in calculation, they have one set of figures in their mind, and another on the paper. If we could see into their minds, they do not make a mistake; they seem to do so, because we think, that they have the same numbers in their mind as they have on the paper. If this were not so, we should not believe them to be in error, any more than I thought that a man was in error, whom I lately heard exclaiming that his entrance hall had flown into a neighbour's hen, for his meaning seemed to me sufficiently clear. Very many controversies have arisen from the fact, that men do not rightly explain their meaning, or do not rightly interpret the meaning of others. For, as a matter of fact, as they flatly contradict themselves, they assume now one side, now another, of the argument, so as to oppose the opinions, which they consider mistaken and absurd in their opponents.


     `,
];

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/chaos-system.jpg"
					alt="butterfly effect - chaos theory"
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
