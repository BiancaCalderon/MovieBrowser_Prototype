import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { MovieData } from '../types/movie.types';

interface MovieSectionProps {
  title: string;
  movies: MovieData[];
  layout: 'portrait-card' | 'landscape-card';
}

const { width } = Dimensions.get('window');

export default function MovieSection({ title, movies, layout }: MovieSectionProps) {
  const isPortrait = layout === 'portrait-card';
  
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <Image
              source={{ uri: isPortrait ? movie.posters.portrait.url : movie.posters.landscape.url }}
              style={[
                styles.movieImage,
                isPortrait ? styles.portraitImage : styles.landscapeImage,
              ]}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  movieCard: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  movieImage: {
    backgroundColor: '#1a1a1a',
  },
  portraitImage: {
    width: width * 0.4,
    height: (width * 0.4 * 3) / 2, // 2:3 ratio
  },
  landscapeImage: {
    width: width * 0.7,
    height: (width * 0.7 * 9) / 16, // 16:9 ratio
  },
}); 