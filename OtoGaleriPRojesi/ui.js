function UI(){
}


UI.prototype.addCartoUI=function(newCar){

    /* <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr>  */
 
console.log(newCar);

const carList=document.getElementById("cars");
carList.innerHTML+= ` 

<tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>"${newCar.title}"</td>
        <td>"${newCar.price}"</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
</tr>

`

};