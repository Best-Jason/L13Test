import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function DetailsScreen({ route }) {
    const { school } = route.params;
    const [showMore, setShowMore] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{school.school_name}</Text>

            <Text style={styles.subtitle}>📍 Address:</Text>
            <Text>{school.address}</Text>

            <Text style={styles.subtitle}>🚆 Nearest MRT:</Text>
            <Text>{school.mrt_desc || 'N/A'}</Text>

            <Text style={styles.subtitle}>🚌 Bus Services:</Text>
            <Text>{school.bus_desc || 'N/A'}</Text>

            <Text style={styles.subtitle}>🎓 Principal:</Text>
            <Text>{school.principal_name || 'N/A'}</Text>

            <TouchableOpacity onPress={() => setShowMore(!showMore)} style={{ marginTop: 10 }}>
                <Text style={styles.viewMore}>{showMore ? "View Less Info" : "View More Info"}</Text>
            </TouchableOpacity>

            {showMore && (
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>🏫 Additional School Details:</Text>
                    <Text>📍 Postal Code: {school.postal_code || 'N/A'}</Text>
                    <Text>📞 Telephone: {school.telephone_no || 'N/A'}</Text>
                    <Text>📠 Fax: {school.fax_no || 'N/A'}</Text>
                    <Text>📧 Email: {school.email_address || 'N/A'}</Text>
                    <Text>👨‍🏫 First VP: {school.first_vp_name || 'N/A'}</Text>
                    <Text>👩‍🏫 Second VP: {school.second_vp_name || 'N/A'}</Text>
                    <Text>🏢 DGP Code: {school.dgp_code || 'N/A'}</Text>
                    <Text>📌 Zone Code: {school.zone_code || 'N/A'}</Text>
                    <Text>🏫 Type Code: {school.type_code || 'N/A'}</Text>
                    <Text>🌿 Nature Code: {school.nature_code || 'N/A'}</Text>
                    <Text>🎓 Main Level Code: {school.mainlevel_code || 'N/A'}</Text>
                    <Text>🗣️ Mother Tongue 1: {school.mothertongue1_code || 'N/A'}</Text>
                    <Text>🗣️ Mother Tongue 2: {school.mothertongue2_code || 'N/A'}</Text>
                    <Text>🗣️ Mother Tongue 3: {school.mothertongue3_code || 'N/A'}</Text>
                </View>
            )}
        </ScrollView>
    );
}
