import { Dog } from "./types/Dog"; // Correct the import path

const BASE_URL = "https://api.thedogapi.com/v1";

// Fetch a list of dogs (limit of 10 per page)
export const fetchDogs = async (): Promise<Dog[]> => {
  const response = await fetch(`${BASE_URL}/breeds?limit=10&page=1`);
  if (!response.ok) {
    throw new Error(`Failed to fetch dogs: ${response.statusText}`);
  }
  return response.json();
};

// Search for dogs based on a query
export const searchDogs = async (query: string): Promise<Dog[]> => {
  const response = await fetch(`${BASE_URL}/breeds/search?q=${query}`);
  if (!response.ok) {
    throw new Error(`Failed to search for dogs: ${response.statusText}`);
  }
  return response.json();
};

