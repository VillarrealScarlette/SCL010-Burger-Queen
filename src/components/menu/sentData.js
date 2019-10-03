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