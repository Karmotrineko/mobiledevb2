import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([]);

  const baseURL = 'https://swapi.dev/api/people/';

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={styles.container}>
      {people.length > 0 ? (
        people.map((person) => (
          <Text key={person.name}>{person.name}</Text>
        ))
      ) : (
        <Text>Carregando....</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
