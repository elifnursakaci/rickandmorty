import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/uı/customButton';
import {screensStyle} from '../../styles/screenStyles';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/constans';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/charactersActions';
import {useNavigation} from '@react-navigation/native';

const FilterCharacters = params => {
  const [filterGender, setFilterGender] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const filterCharacters = () => {
    dispatch(getCharacterList(params));
    navigation.goBack();
  };

  const clearCharacters = () => {
    const params = {status: filterStatus, gender: filterGender};
    dispatch(getCharacterList());
    navigation.goBack();
  };
  return (
    <View style={screensStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => setFilterGender(item.value)}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => setFilterStatus(item.value)}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.GREEN}
        />
        <CustomButton
          onPress={filterCharacters}
          title="Clear"
          backColor={Colors.BROWN}
        />
      </View>
    </View>
  );
};

export default FilterCharacters;
