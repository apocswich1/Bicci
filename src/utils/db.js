import firebase from 'firebase';

const DB = {
    getDocuments: (table) => {
        try {
            let documents = [];
            let response = firebase.firestore().collection(table).get();
            response.then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                snapshot.forEach(doc => documents.push(doc.data()));
            }).catch(err => {
                console.log('Error getting documents', err);
            });
            return documents;
        } catch (error) {
            return { msg: error };
        }
    },
    getDocumentById: async (table, id) => {

    }
}

export default DB;