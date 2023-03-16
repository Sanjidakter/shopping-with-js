document.getElementById("first-card").addEventListener("click", function () {
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;

  //console.log(productName,productPrice,productQuantity);

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  // show the data
  displayDta(productName, productPrice, productQuantity, priceTotal);
});

document.getElementById("second-card").addEventListener("click", function (e) {
  // console.log(e.target.parentNode.parentNode.children[0].innerText);
  const productName = e.target.parentNode.parentNode.children[0].innerText;
  const productPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const productQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const sumTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayDta(productName, productPrice, productQuantity, sumTotal);
});

document.getElementById("third-card").addEventListener("click", function () {
    const productName = document.getElementById("third-name").innerText;
    const productPrice = document.getElementById("third-price").innerText;
    const productQuantity = document.getElementById("third-quantity").innerText;
  
    //console.log(productName,productPrice,productQuantity);
  
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  
    // show the data
    displayDta(productName, productPrice, productQuantity, priceTotal);
  });
  

  document.getElementById("fourth-card").addEventListener("click", function () {
    const productName = document.getElementById("fourth-name").innerText;
    const productPrice = document.getElementById("fourth-price").innerText;
    const productQuantity = document.getElementById("fourth-quantity").innerText;
  
    //console.log(productName,productPrice,productQuantity);
  
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  
    // show the data
    displayDta(productName, productPrice, productQuantity, priceTotal);
  });


  document.getElementById("fifth-card").addEventListener("click", function () {
    const productName = document.getElementById("fifth-name").innerText;
    const productPrice = document.getElementById("fifth-price").value;
    const productQuantity = document.getElementById("fifth-quantity").value;
  
    //console.log(productName,productPrice,productQuantity);
  
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  
    // show the data
    displayDta(productName, productPrice, productQuantity, priceTotal);
  });










// common function to display data


let no = 0;
function displayDta(productName, productPrice, productQuantity, priceTotal) {
  no++;
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${no}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
}
