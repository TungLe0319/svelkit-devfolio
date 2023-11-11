export interface ProjectItem {
	title: string;
	src: string;
	description: string;
	link: string; // Fixed the typo in "link"
	tech: TechItem[];
}

export interface TechItem {
	title: string;
	src: string;
}

export interface ExperienceItem {
	date: string;
	title: string;
	description: string;
	link: string;
	tech: string[];
}

export type ProjectList = ProjectItem[];

export type TechList = TechItem[];

export type ExperienceList = ExperienceItem[]