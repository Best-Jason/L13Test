import { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
    const [schools, setSchools] = useState([]);
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://data.gov.sg/api/action/datastore_search?resource_id=d_688b934f82c1059ed0a6993d2a829089')
            .then(res => res.json())
            .then(data => {
                setSchools(data.result.records);
                setFilteredSchools(data.result.records);
            });
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        if (text === '') {
            setFilteredSchools(schools);
        } else {
            setFilteredSchools(
                schools.filter(s => s.school_name.toLowerCase().includes(text.toLowerCase()))
            );
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search Schools..."
                value={search}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredSchools}
                keyExtractor={item => item.school_name}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('Details', { school: item })}
                    >
                        <Text style={styles.schoolName}>{item.school_name}</Text>
                        <Text style={styles.address}>{item.address}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
