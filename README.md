# 🎬 Movie Database App

An interactive web application that fetches, displays, and lets users explore movies (and optionally TV series) using The Movie Database (TMDb) API.

## 🔍 Overview

- Browse trending, popular, and top-rated movies.
- View detailed pages containing title, overview, release date, poster images, genres, cast, and related titles.
- Support for feature enhancements like collections or user favorites.

## 📌 Features

| Feature             | Description                                              |
|---------------------|----------------------------------------------------------|
| 🔎 **Search**       | Find movies by title.          |
| 🧾 **Details**      | Includes metadata, cast info, poster, release date.       |
| 🗂️ **Collections**  | View if a movie belongs to a collection.   |
| 🎨 **Responsive UI**| Designed with Tailwind.       |

## 🚀 Tech Stack

- **Frontend**: React, Tailwind
- **API**: TMDb API for real-time movie data, Appwrite for database support
## ⚙️ Requirements

- Node.js (latest stable version)
- npm or yarn package manager


### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

- `VITE_TMDB_API`
- `VITE_APPWRITE_PROJECT_ID`
- `VITE_APPWRITE_ENDPOINT`
- `VITE_APPWRITE_DATABASE_ID`
- `VITE_APPWRITE_METRICS_ID`


## 🛠️ Setup & Installation

```bash
# 1. Clone this repo
git clone https://github.com/ChristinaSarogl/movie-database.git
cd movie-database

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev

# 4. Visit your browser

```
## ⚡ Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## ❤️ Acknowledgments

- [TMDb API](https://www.themoviedb.org/) for powering all movie data.
- [Appwrite](https://appwrite.io/) for providing the database storage.


## 📄 License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors
[@ChristinaSarogl](https://github.com/ChristinaSarogl)