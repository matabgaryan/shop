## Getting started

You can view a live demo over at https://matabgaryan.github.io/shop/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)
- `npm test` to run tests


For Deployment:
- `npm run deploy` to deploy new changes 


## Project Description
Simple shop website has two Layouts `AdminLayout` and `UserLayout`.
For managing Different layouts and privileges I used `Role based authenticatin.`
Also there is `Public` and `Private` routes for managing user route actions.
User data is hardcoded , so for authentication there is no need to type anything inside login forms, just click `Login` button.

#### Filtration products 
For Filtration products I used `Weighted Random algorithm`. This `algorithm`  randomly return you the item from the products list and it will take each item's weight into account, so that items with the higher weight will be picked more often.
  - ##### Weighted Random Algorithm Resources
    - https://www.educative.io/answers/what-is-the-weighted-random-selection-algorithm
    - https://dev.to/trekhleb/weighted-random-algorithm-in-javascript-1pdc`


#### Routes
- `Admin` Has privilege to create either a single shop item at a time or bulk-create several items at a time.
  ##### Admin Routes
    - `/shop/admin/login` Auth
    - `/shop/admin/dashboard` Dashboard
    - `/shop/admin/products` List of products
    - `/shop/admin/products/create` For creating products

- `User` Can see products list. Add products in his/her shopping cart and Remove from it.
  ##### User Routes
    - `/shop` Home page
    - `/shop/products` List of products
    
## Technology Stack
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://react-redux.js.org/introduction/getting-started)
* [Redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwindcss](https://tailwindcss.com/docs/installation)
* [Jest](https://jestjs.io/docs/getting-started)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

## Project Folder And File Structure
```
src
├── mocks
├── tests
├── assets
├── components                                     
├── config
├── constants
├── containers
├── core
│       ├── api
│       ├── services
│       │        ├── ProductsFilter.ts
│       └── data
├── hooks
│    ├── useProducts.ts
├── router
├── store        
├── views

```
    
