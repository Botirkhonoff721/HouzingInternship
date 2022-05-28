// let obj = { title: "webbrain" };
// let obj1 = obj;
// console.log(obj1 === obj);
let obj = {
  name: "Abdulaziz",
  surname: "Academy",
  getFullname1: function () {
    console.log(this.name, this.surname);
  },
  getFullname2: () => {
    console.log(obj.name, obj.surname);
  },
};
obj.getFullname1();
obj.getFullname2();

//  Housing

// 1 npm install react-router-dom
// 2 npm install styled-component
// 3 npm install antd
// 4 npm install react-query

// Folders
// components, context, pages, root, utils, assets
