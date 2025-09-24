import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [suwat, setSuwat] = useState('');
  const [mensahe, setMensahe] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Add new message
  const handleSendMessage = () => {
    if (suwat.trim()) {
      setMensahe([...mensahe, suwat]);
      setSuwat('');
    }
  };

  // Add new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Reusable message renderer
  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Messenger Section */}
      <View style={styles.panelContainer}>
        <Text style={styles.header}>Messenger</Text>
        <View style={styles.panel}>
          <FlatList
            data={mensahe}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={suwat}
              onChangeText={setSuwat}
            />
            <Button title="Send" onPress={handleSendMessage} />
          </View>
        </View>
      </View>

      {/* Comment Section */}
      <View style={styles.panelContainer}>
        <Text style={styles.header}>Comment</Text>
        <View style={styles.panel}>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Button title="Post" onPress={handleAddComment} />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  panelContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  panel: {
    width: 300,
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  messages: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});