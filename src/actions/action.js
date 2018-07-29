export function fetchYoutubeVideo(videos) {
  return {
    type: 'FETCH_YOUTUBE_VIDEOS_ACTION',
    videos,
  };
}

export function selectVideoAction(video) {
  return {
    type: 'SELECT_VIDEOS_ACTION',
    video,
  };
}
