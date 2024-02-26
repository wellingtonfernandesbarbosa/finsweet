export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface EventInfo {
  id?: number;
  day: number;
  month: string;
  title: string;
  description?: string;
  text: string;
  date1: string;
  date2: string;
  local: string;
}

export interface BlogPostCard {
  id: number;
  title: string;
  text: string;
  author: string;
  date: string;
}
