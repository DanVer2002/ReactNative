import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NewsContext } from '../contexts/NewsContext';
import NewsItem from '../components/NewsItem';

const HomeScreen = () => {
  const { news } = useContext(NewsContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NewsItem
            title={item.title}
            description={item.description}
            link={item.link}
            pubDate={item.pubDate}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
