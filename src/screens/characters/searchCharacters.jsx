import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screensStyle} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';
import Colors from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';
import SearchItem from '../../components/characters/searchItem';
import {useNavigation} from '@react-navigation/native';
import CharacterDetail from './characterDetail';
import {CHARACTERDETAIL} from '../../utils/routes';

const SearcCharacters = () => {
  const navigation = useNavigation();
  const {characterList, pending, parametters} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCharacterList(parametters));
  }, []);
  const handleSumbit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          returnKeyType="search"
          placeholder="Search Character"
          onSubmitEditing={handleSumbit}
          style={{
            width: '95%',
            height: 40,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
            padding: 10,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <CustomButton
          onPress={() =>
            navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
          }
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };

  return (
    <View style={screensStyle.container}>
      <FlatList
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
        // onEndReachedThreshold={0.5}
        // onEndReached={handleLoadMore}
        // ListFooterComponent={<Spinner />}
      />
    </View>
  );
};

export default SearcCharacters;
