import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Avatar, Button, Card, CheckBox, Skeleton } from '@rneui/themed';
import stylesHome from './Home.styles'

export default function Home({ navigation }) {
    return (
        <View style={stylesHome.container}>
            <Text style={stylesHome.cTitle}>Class02</Text>
            <Pressable style={stylesHome.buttonArea}>
                <View style={stylesHome.cButton}>
                    <Button title="Solid" />
                    <Button title="Outline" type="outline" />
                    <Button title="Clear" type="clear" />
                </View>
                <View >
                    <Card style={stylesHome.cCard}>
                        <Text style={stylesHome.cText}>My Placeholder</Text>
                        <Text style={stylesHome.cText}>
                            Don't click below button
                            {'"a benevolent smile"'}
                        </Text>
                        <Button size="sm" type="clear">
                            Learn More
                        </Button>
                    </Card>
                </View>
                <View style={stylesHome.cCheckbox}>
                    <CheckBox enable title="Label" />
                    <CheckBox checked disabled title="Label" />
                </View>
                <View style={stylesHome.cAvatar}>
                    <Avatar
                        size={50}
                        rounded
                        title="Rd"
                        containerStyle={{ backgroundColor: "grey" }}
                    />
                    <Avatar
                        size={30}
                        rounded
                        title="AB"
                        containerStyle={{ backgroundColor: "black" }}
                    />
                </View>
                <View style={stylesHome.cSkeleton}>
                    <Skeleton width={300} height={5} />
                    <Skeleton circle width={20} height={20} />
                </View>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
