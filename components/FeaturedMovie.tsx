import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MovieData } from '../types/movie.types';

interface FeaturedMovieProps {
  movie: MovieData;
}

const { width, height } = Dimensions.get('window');

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movie.posters.landscape.url }}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.metadata}>
            <Text style={styles.metadataText}>{movie.year}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metadataText}>{movie.duration}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metadataText}>{movie.rating}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.quality}>{movie.quality}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.7,
    width: width,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  content: {
    gap: 8,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metadataText: {
    color: '#fff',
    fontSize: 14,
  },
  dot: {
    color: '#fff',
    fontSize: 14,
  },
  quality: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
}); 