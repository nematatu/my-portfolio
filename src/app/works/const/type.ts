export type WorkItem = {
	id: number;
	title: string;
	description: string;
	thumbnail: string;
	images: string[];
	gitHubUrl?: string;
	url?: string;
	fullDescription: string;
	techStack: string[];
};

export type WorksClientProps = {
	worksData: WorkItem[];
};
