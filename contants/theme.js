import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const COLORS = {
    red: '#E81E4D',
    green: '#00C135',
    grey: '#808080'
}

const SIZES = {
    small: 12,
    medium: 16,
    large: 20,
    xxLarge: 44,
    height,
    width
}

export { COLORS, SIZES }