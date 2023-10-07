import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Add your preferred icon library

const MainScreen = () => {
  const images = [
    require('./images/dress1.png'),
    require('./images/dress1.png'),
    require('./images/dress1.png'),
    require('./images/dress1.png'),
    require('./images/dress1.png'),
    require('./images/dress1.png'),
  ];

  const itemNames = [
    'Blue Dress',
    'Red Dress',
    'Yellow Dress',
    'Green Dress',
    'Pink Dress',
    'Purple Dress',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="bars" size={24} color="#000" style={styles.headerIcon} /> {/* Left icon */}
        <Text style={styles.headerTitle}>Shopertino</Text>
        <Icon name="shopping-bag" size={24} color="#000" style={styles.headerIcon} /> {/* Right icon */}
      </View>

      {/* Scrollable row of pictures with full gray overlay */}
      <ScrollView
        horizontal showsHorizontalScrollIndicator={false}
      >
        {/* Example picture items */}
        {images.map((image, index) => (
          <View key={index} style={styles.pictureContainer}>
            <Image source={image} style={styles.picture} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.pictureText}>{itemNames[index]}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* New Arrivals Section */}
      <View style={styles.newArrivals}>
        <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
        <Image source={require('./images/dress1.png')} style={styles.newArrivalsImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 575,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '100',
  },
  headerIcon: {
    fontSize: 24,
  },
  pictureContainer: {
    width: 200,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  picture: {
    width: '100%',
    height: 60, // Adjust the height to your preference
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  pictureText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newArrivals: {
    alignItems: 'center',
    marginTop: 20,
  },
  newArrivalsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newArrivalsImage: {
    width: 300,
    height: 400,
  },
});

export default MainScreen;
