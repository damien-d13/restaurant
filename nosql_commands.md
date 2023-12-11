# Evaluation 
- Réaliser les commandes permettant de répondre aux filtres demandés sur la base restaurant envoyée

# Requêtes
1.	Créez une base restaurants, puis une collection restaurant. Utilisez mongoDBCompass pour importer les données dans la collection (voir slides)

2.	Sur cette base réalisées les opérations suivantes (ces opérations peuvent être faites en cli) : 
- Affichez tous les documents de la collection restaurant
```js
db.restaurants.find()
``` 
- Comptez le nombre de documents présents dans la collection restaurant
```js
db.restaurants.countDocuments()
3772
```
- Affichez les documents ayant un restaurant_id >= 3015000
```js
db.restaurants.find({restaurant_id: {$gte: 3015000}})
```
- Comptez le nombre de documents récupérés par la requête précédente
```js
db.restaurants.find({restaurant_id: {$gte: 3015000}}).count()
```
- Récupérez le premier document qui contient un grade de type A, avec un score supérieur à 10 (Regardez dans mongoDBCompass pour comprendre l’arborescence)
```js
db.restaurants.find({grades: {$elemMatch: {grade: "A", score: {$gt: 10}}}}).limit(1)
```
- Ajoutez (avec $push) au document récupéré précédemment, un nouveau grade de type B et un score de 10 (la date, mettez ce que vous voulez)
```js
db.restaurants.updateOne({grades: {$elemMatch: {grade: "A", score: {$gt: 10}}}}, {$push: {grades: {grade: "B", score: 10, date: new Date()}}})
```
- Incrémenter de 5 le score du premier grade du restaurant ayant pour ‘borough’ : « Brooklyn » et pour ‘cuisine’ : « Hamburgers »
```js
db.restaurants.updateOne({borough: "Brooklyn", cuisine: "Hamburgers"}, {$inc: {"grades.0.score": 5}})
```
- Affichez les 10 premiers restaurants par ordre alphabétique de ‘name’
```js
db.restaurants.find().sort({name: 1}).limit(10)
```
- Trouvez le (ou les) restaurant(s) ayant pour address.coord.coordinates les valeurs :
    - 0 : 73.98513559999999
```js
db.restaurants.find({"address.coord.0": 73.98513559999999})
```
    - 1 : 40.7676919
```js
db.restaurants.find({"address.coord.1": 40.7676919})
```
```js
db.restaurants.find({"address.coord": [73.98513559999999, 40.7676919]})
```
- Recherchez les restaurants address.zipcode >= 10500 (afficher UNIQUEMENT ‘name’, ‘cuisine’, ‘restaurant_id’)
```js
db.restaurants.find({"address.zipcode": {$gte: 10500}}, {name: 1, cuisine: 1, restaurant_id: 1})
```
- Ajoutez une prime à tous les restaurants ayant un seul grade dans le tableau de grades. 
```js
db.restaurants.updateMany({grades: {$size: 1}}, {$set: {score: true}})
```
- (Bonus) Créez une vue avec permettant d’afficher les adresses de tous les restaurants n’ayant qu’un seul grade.
```js
db.createView("restaurant_view", "restaurant", [{$match: {grades: {$size: 1}}}, {$project: {address: 1}}])
```
