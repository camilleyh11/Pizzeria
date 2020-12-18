# Pizzeria - React & Node.JS
Réalisé dans le cadre de la matière INFO734 - Développement Full Stack

<br/>
Cette application full stack permet de commander des pizzas et a été réalisée avec la solution MERN composée de MongoDB, Express JS, React et NodeJS.
<br/><br/><br/>

Pour avoir accès au site : https://pizzaland.herokuapp.com/


### Pour lancer l'application localement

## 1. Cloner ce dépôt GitHub : 

```
$ git clone git@github.com:Elsa-R/Pizzeria.git
```

## 2. Lancer le backend

```
# ouvrir un terminal
$ npm install
$ npm start
```

## 3. Lancer le frontend

```
# ouvrir un terminal
$ cd frontend
$ npm install
# kits d'outils Font Awesome
$ npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
$ npm start
```

### Ajouter des utilisateurs

- Enlever le commentaire "//await User.remove({});" qui est dans le fichier userRouter.js
- Aller sur : http://localhost:5000/api/users/seed

### Ajouter des pizzas

- Enlever le commentaire "//await Product.remove({});" qui est dans le fichier productRouter.js
- Aller sur : http://localhost:5000/api/products/seed


Projet réalisé avec @camilleyh11
