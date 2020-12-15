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

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosState {
  photos: Photo[];
  selectedPhoto: Photo | undefined;
  photosPerPage: number;
  currentPage: number;
}

export interface RootState {
  [key: string]: any;
}
