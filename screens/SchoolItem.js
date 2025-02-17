//not used
// used as a easier/cleaner way to update what i want to show in the list

import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function SchoolItem({ school, onPress }) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text style={styles.schoolName}>{school.school_name}</Text>
            <Text style={styles.address}>{school.address}</Text>
        </TouchableOpacity>
    );
}
