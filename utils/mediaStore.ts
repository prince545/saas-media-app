
type MediaType = 'video' | 'image';
export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  createdAt: number;
}

const media: MediaItem[] = [];

export function addMedia(item: MediaItem) {
  media.unshift(item);
}

export function getAllMedia(): MediaItem[] {
  return media;
} 