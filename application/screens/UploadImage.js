import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-paper';


const options = {
    title: 'Select Images',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

function UploadImage() {
    const [selectImage, setSelectImage] = useState('')

    const openPicker = () => {
        ImagePicker.showImagePicker(options, (response) => {

            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image ');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = response;
                setSelectImage(source);
            }
        });
    }

    const removeImage = () => {
        setSelectImage('')
    }


    return (
        <View>
            <Avatar.Image size={250} source={{ uri: 'data:image/jpeg;base64,' + selectImage.data }} />

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <Button onPress={openPicker} title="Select image"></Button>
                <View style={{ marginLeft: 5 }}>
                    <Button title='Remove Image' onPress={() => { removeImage() }}>Remove Image</Button>
                </View>
            </View>
        </View>
    )
}

export default UploadImage; 
