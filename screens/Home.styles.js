import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../contants"

const stylesHome = StyleSheet.create({
    container: {
        width: '100%',
    },
    cTitle: {
        fontWeight: "bold",
        fontSize: SIZES.xxLarge,
        color: COLORS.grey,
        textAlign: "center",
        margin: '2%'
    },
    buttonArea: {
        width: SIZES.width,
        height: SIZES.height,
    },
    cButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%'
    },
    cCard: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        margin: '2%',
    },
    cText: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '2%',
        color: COLORS.grey,
    },
    cCheckbox: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
    },
    cAvatar: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
    },
    cSkeleton: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
    }
})

export default stylesHome;