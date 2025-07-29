import { Client, Databases, ID, Query } from "appwrite";
import type { MovieInfo } from "./custom_types";

const PROJECT_ID: string = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID: string = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID: string = import.meta.env.VITE_APPWRITE_METRICS_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm: string, movie: MovieInfo) => {
  // Use Appwrite to check if the term exists in the bd
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    // If it does update the count
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });

      // If not, create a new document with the search term and the count
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        movie_id: movie.id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents;
    
  } catch (error) {
    console.log(error);
  }
};
