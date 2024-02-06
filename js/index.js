//console.log("hello world !!")
//console.warn("nepal")
//console.error("india")


//const clz"abc"
//console.log(clz)

//clz="xyz"
//console.log(clz)



//clz="abc"
//console.log(clz)

//clz="xyz"
//console.lof(clz)
let arrayone=[
  {title:"working time:"},

  {title:"find us"},

]
let datatwo="";
arrayone.map((value,index)=>
{
  datatwo = `  <div class="work">
<div class="icon">logo</div>
<div><p>working hour</p>
<div> 10:00am-11:00am</div>
</div>
</div>



<div class="work">
<div class="icon">logo</div>
<div><p>info_title>${value.title}</p>
 <div> butwal devinagar</div>
</div>
</div>`
})

let info_data = document.getElementById("info");

info_data.innerHTML= datatwo;
