import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    marginVertical: 10,
  },
  name: {
    marginVertical: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
    elevation: 3, // Gölgelendirme
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
    elevation: 3, // Gölgelendirme
  },
  status: {
    color: Colors.WHITE,
    margin: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  sectionTitle: {
    textAlign: 'center',
    marginVertical: 15,
    color: Colors.BROWN,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  infoContainer: {
    backgroundColor: '#e5ded1',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    elevation: 2, // Gölgelendirme
  },
  infoBox: {
    backgroundColor: '#e5ded1',
    padding: 12,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flex: 2,
    elevation: 2, // Gölgelendirme
  },
});
