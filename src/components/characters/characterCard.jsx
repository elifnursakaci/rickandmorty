import {ArrowRight} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Colors from '../../theme/colors';
import GenderIcon from './genderIcon';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={15} gender={item.gender} />
            <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <ArrowRight size={20} color={Colors.BLACK} />
      </View>
    </Pressable>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  species: {
    color: '#999',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    color: '#999',
    fontSize: 14,
  },
  gender: {
    color: '#999',
    marginLeft: 5,
    fontSize: 14,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
