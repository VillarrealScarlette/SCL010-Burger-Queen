/*import firebase from './firebase.js'

const db = firebase.firestore();
const data = db.collection('productos');


obtener datos de firebase  
export const retrieve=(type)=>{

  return new Promise((resolve, reject) => {
    data.where("type", "==", type)
    .get()
    .then(function(querySnapshot) {
        let products = [];
        querySnapshot.forEach(function(doc) {
            products.add(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        resolve(products)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        reject(error)
    });
    
    data.get()
    .then(product => {
        resolve(product)
      })
  })
};

//añadir datos a firebase
const add=(product)=>{
    data.add(product);
}


//actualizar datos en firebas

const update=(id, product)=>{
    data.doc(id).set(product, { merge: true });;
}*/