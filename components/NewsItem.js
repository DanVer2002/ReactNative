import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NewsItem = ({ title, description, link, pubDate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(link)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{new Date(pubDate).toLocaleDateString()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default NewsItem;
