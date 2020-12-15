export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  selectedPost: Post | undefined;
}

export interface RootState {
  [key: string]: any;
}
