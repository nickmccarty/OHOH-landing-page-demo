// Initialize Firebase (only once!)
const firebaseConfig = {
  apiKey: "AIzaSyBCdjUlaEx34eL-gD4xOi4t5gygr1D7veg",
  authDomain: "ohoh-contact-form.firebaseapp.com",
  projectId: "ohoh-contact-form",
  storageBucket: "ohoh-contact-form.appspot.com", // typo fixed!
  messagingSenderId: "575108216619",
  appId: "1:575108216619:web:0e92092cfd4f61c698776e",
  measurementId: "G-YF0E5PMYVN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.querySelector('.message-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Save to Firestore
    try {
        await db.collection('messages').add({
            name,
            email,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert('Thank you for your message!');
        e.target.reset();
    } catch (error) {
        alert('Sorry, there was an error. Please try again.');
        console.error(error);
    }
});
