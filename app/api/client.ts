import type { Cat, PaginatedCats } from "./types";

const BASE_URL = "http://localhost:3001";

/**
 * Fetches a paginated list of cats with optional search filtering.
 * * @param page - The current page index (1-based)
 * @param limit - Number of items per page
 * @param searchTerm - Optional string to search across all cat properties
 */
export const getCats = async (
  page: number = 1,
  limit: number = 10,
  searchTerm?: string
): Promise<PaginatedCats> => {
  // Construct query parameters
  const params = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString()
  });

  if (searchTerm) {
    // 'q' is the json-server keyword for full-text search
    params.append("q", searchTerm);
  }

  const response = await fetch(`${BASE_URL}/cats?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch cats: ${response.statusText}`);
  }

  // json-server returns the total count in the 'X-Total-Count' header
  const totalCount = parseInt(response.headers.get("X-Total-Count") || "0", 10);
  const data: Cat[] = await response.json();

  return {
    data,
    totalCount
  };
};

/**
 * Fetches a single cat by its GUID
 */
export const getCatById = async (id: string): Promise<Cat> => {
  const response = await fetch(`${BASE_URL}/cats/${id}`);

  if (!response.ok) {
    throw new Error(`Cat with ID ${id} not found.`);
  }

  return response.json();
};

/**
 * Advanced: Fetch cats by specific criteria (e.g., only those good with Dogs)
 */
export const getCatsByCompatibility = async (trait: string): Promise<Cat[]> => {
  // json-server supports filtering by array values using _like
  const response = await fetch(`${BASE_URL}/cats?goodWith_like=${trait}`);
  return response.json();
};
