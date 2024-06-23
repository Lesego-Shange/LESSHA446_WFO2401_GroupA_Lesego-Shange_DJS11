import { fetchPreviews, fetchGenre, fetchShow } from "./services/api";

export async function previewsLoader() {
  const previews = await fetchPreviews();
  return previews;
}

export async function genreLoader({ params }: { params: { genreId: string } }) {
  const { genreId } = params;
  const genre = await fetchGenre(parseInt(genreId));
  return genre;
}

export async function showLoader({ params }: { params: { showId: string } }) {
  const { showId } = params;
  const show = await fetchShow(showId);
  return show;
}
