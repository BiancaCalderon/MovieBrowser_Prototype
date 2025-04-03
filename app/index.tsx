import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieSection from '../components/MovieSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchMovieData, getFeaturedMovie, getContainers } from '../services/movieService';
import { MovieData, Container } from '../types/movie.types';

export default function HomeScreen() {
  const [featuredMovie, setFeaturedMovie] = useState<MovieData | null>(null);
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchMovieData();
        setFeaturedMovie(getFeaturedMovie(data));
        setContainers(getContainers(data));
      } catch (error) {
        console.error('Error loading movie data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <LoadingSpinner />
      </View>
    );
  }

  const content = (
    <ScrollView 
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      {featuredMovie && (
        <FeaturedMovie movie={featuredMovie} />
      )}
      {containers.map((container) => (
        <MovieSection
          key={container.id}
          title={container.title}
          movies={container.items}
          layout={container.layout}
        />
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false,
        }} 
      />
      {Platform.OS === 'web' ? (
        <View style={styles.mobileContainer}>
          {content}
        </View>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mobileContainer: {
    maxWidth: 480, //para móvil
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    overflow: 'hidden',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    }),
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 