import { Dimensions } from 'react-native'

const getWIDTH = () => {
    return Dimensions.get('window').width
}

const getHEIGHT = () => {
    return Dimensions.get('window').height
}

export const DimensionApp = { getWIDTH, getHEIGHT }