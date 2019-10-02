import firebase from './firebase.js'

const db = firebase.firestore();
const data = db.collection('orders');

//obtener datos de firebase  

const retrieve = (estado) => {

    return new Promise((resolve, reject) => {
        data.where("estado", "==", estado)
            .get()
            .then(function (querySnapshot) {
                let orders = [];
                querySnapshot.forEach(function (doc) {
                    orders.push(doc.data())
                    console.log(doc.id, " => ", doc.data());
                });
                resolve(orders)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                reject(error)
            });

    })
};

/*/añadir datos a firebase
const add = (product) => {
    data.add(product);
}


//actualizar datos en firebas

const update = (id, product) => {
    data.doc(id).set(product, {
        merge: true
    })
}


export const save = () => {

    // colección creada
    db.collection("posts").add({
           
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};

export const showPost = () => {
    let db = firebase.firestore();
    let docRef = db.collection("posts").orderBy("timestamp", "desc");
    return docRef.get();

};*/
export default retrieve;