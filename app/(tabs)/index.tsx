import { Image, StyleSheet, TextInput, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
    const [formData, setFormData] = useState({
        address: '',
        location: '',
    });

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">
                    Bem vindo ao canal Dengue Report!
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Formulario de Denuncia</ThemedText>
                {/* make a form with two inpnuts and button */}
                <ThemedView style={styles.formContainer}>
                    <label>
                        Endereço:
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => {
                                setFormData({ ...formData, address: text });
                            }}
                        />
                    </label>
                    <label>
                        Localização:
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => {
                                setFormData({ ...formData, location: text });
                            }}
                        />
                    </label>
                    <Button
                        title="Submit"
                        onPress={() => {
                            // send form data to the server
                            fetch('https://example.com/api/submit', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(formData),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    console.log(
                                        'Form submitted successfully:',
                                        data
                                    );
                                })
                                .catch((error) => {
                                    console.error(
                                        'Error submitting form:',
                                        error
                                    );
                                });
                        }}
                    />
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    input: {
        // Add your input styles here
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },
    formContainer: {
        // Add your form container styles here
        padding: 10,
        backgroundColor: '#CCC',
        borderRadius: 5,
    },
});
