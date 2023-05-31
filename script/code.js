let tableContainer = document.getElementById('table-container');
let tableData = [
    {name : 'Poloneck', price : 'R99', image: 'https://i.postimg.cc/jdw72Vvt/poloneck.png'},
   {name : 'Boots', price : 'R36', image: 'https://i.postimg.cc/52wBnchb/winter-boots.png'},
   {name : 'Hoodie', price: 'R59', image:'https://i.postimg.cc/HkRxN3yz/winter-hoodie.png'},
   {name : 'Dress', price: 'R102', image: 'https://i.postimg.cc/g0yx68xK/winter-dress-1.png'},
   
];
tableData.forEach( (item) => {
    tableContainer.innerHTML += 
    `
    <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><img src="${item.image} alt="image" loading="lazy"></td>
    </tr>
    `
})