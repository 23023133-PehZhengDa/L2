import Icon from "react-native-vector-icons/FontAwesome6";
import {View, Text, Image} from 'react-native';

const Movie = ({title, year, icon_name, poster})=> {
    return (
        <View>
            <Image source ={poster} style={{width:400, height:500}} />
            <Text>
                {title} {year}
            </Text>
            <Icon name={icon_name} size={50} color="#B23B23" />
        </View>
    );
};

export default Movie;
