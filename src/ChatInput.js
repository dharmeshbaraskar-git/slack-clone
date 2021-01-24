import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();
    const sendMessage = (e) => {
        debugger;
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId)
                .collection("messages").add({
                    message: input,
                    user: user.displayName,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    userImage: user.photoURL
                })
        }

    }
    return (
        <div className="chatInput">
            <form>
                <input type="text"
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={e => setInput(e.target.value)} />

                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    );
}

export default ChatInput;