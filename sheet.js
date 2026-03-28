const sheetURL="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFemTJIVImrT7yAroh5kP7bviNn5ENOdDoMHrTWRziRZNL_jT9JG_VdBurm0Cq1fATG159m-BsI2gR/pub?output=csv";

fetch(sheetURL)
.then(res=>res.text())
.then(data=>{

let rows=data.split("\n").slice(1);

let container=document.getElementById("product-container");

rows.forEach(row=>{

let cols=row.split(",");

let title=cols[0];
let price=cols[1];
let old=cols[2];
let image=cols[3];
let link=cols[4];

let discount=Math.round((old-price)/old*100);

container.innerHTML+=`

<div class="card">

<img src="${image}">

<h3>${title}</h3>

<div class="price">
₹${price}
<span class="old-price">₹${old}</span>
</div>

<div class="discount">${discount}% OFF</div>

<a href="${link}" target="_blank">
<button class="buy-btn">GET DEAL</button>
</a>

</div>

`;

});

});


