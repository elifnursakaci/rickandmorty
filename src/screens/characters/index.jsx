import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {screensStyle} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const {characterList, pending, parametters} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(parametters));
  }, []);
  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreCharacters(params));
  };
  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
          //onEndReachedThreshold={0.5}
          //onEndReached={handleLoadMore}
          //ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({});
