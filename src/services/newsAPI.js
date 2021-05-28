import { API_KEY } from "@env";

const urlNews = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`;
const urlTech = `https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=${API_KEY}`;
const urlHealth = `https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=${API_KEY}`;
const urlBuisness = `https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${API_KEY}`;

export async function getNews(category) {
  try {
    const subject = category;

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return Promise.resolve(data.articles);
  } catch (e) {
    return Promise.reject(e);
  }
}
