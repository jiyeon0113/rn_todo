import {
    Image,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native';

const TestAvoid = () => {
    // eslint-disable-next-line no-unused-vars
    const height = useWindowDimensions().height;

    return (
        <KeyboardAvoidingView
            style={{ 
                flex: 1 
            }}
            behavior={Platform.select({ ios: 'position'})}
            contentContainerStyle={{ flex: 1 }}
            >
            <View style={{ flex: 1}}>
                <View style={[styles.box, {backgroundColor: '#737373'}]}>
                    <Image
                    // eslint-disable-next-line no-undef
                    source={require('../../assets/main.png')}
                    style={{ width: 200, height: 200 }}
                    />
                </View>

                <View style={[styles.box, {backgroundColor: '#818cf8'}]}>
                    <TextInput
                    style={styles.input}
                    placeholder='padding'
                    placeholderTextColor={'#000000'}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        jutifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        height: 40,
        width: '100%',
    },
});

export default TestAvoid;