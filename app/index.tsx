import {Button, View} from "react-native";
import {checkSSL} from "@/modules/ssl-check/sslCheck";

export default function Index() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32}}>
            <Button
                title={'SSL check(valid key)'}
                onPress={async () => {
                    try {
                        const result = await checkSSL('https://wegloat.gloat-staging.gloat.com', domainKeyData.key)
                        console.log('result', result)
                    } catch (error) {
                        console.log('ERROR:', error)
                    }
                }}
            />

            <Button
                title={'SSL check(invalid key)'}
                onPress={async () => {
                    try {
                        const result = await checkSSL('https://wegloat.gloat-staging.gloat.com', domainKeyData.invalidKey)
                        console.log('result', result)
                    } catch (error) {
                        console.log('ERROR:', error)
                    }
                }}
            />
        </View>
    )
}

const domainKeyData = {
    url: 'gloat-staging.gloat.com',
    key: 'WPWkB1GSJ0Q/d+7OlJwpWNIx9D0enF6hB/St45U5jss=',
    // key: 'sha256/WPWkB1GSJ0Q/d+7OlJwpWNIx9D0enF6hB/St45U5jss=',
    invalidKey: 'sha256/AAAkB1GSJ0Q/d+7OlJwpWNIx9D0enF6hB/St45U5jss=',
    endDate: 'Fri, 28 Mar 2025 13:34:54 UTC',
}
