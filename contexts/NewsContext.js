import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { parseString } from 'react-native-xml2js';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=')
      .then(response => {
        parseString(response.data, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          const items = result.rss.channel[0].row;
          const newsData = items.map(item => ({
            title: item.title[0],
            link: item.link[0],
            description: item.description[0],
            pubDate: item.pubdate[0]
          }));
          setNews(newsData);
        });
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};
