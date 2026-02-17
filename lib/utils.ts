// lib/utils.ts
const MEDIA_SERVER_URL = "https://your-media-server.com"; // Replace with your actual server URL

export const getMediaUrl = (path: string) => {
  return `${MEDIA_SERVER_URL}/${path}`;
};