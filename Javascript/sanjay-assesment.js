const url = "https://randomuser.me/api/?results=10";
//fetch(url).then((data) => {
//return data.json().then((fetchdata) => {
//    console.log(fetchdata)
//})
//console.log("hello");
//function lstorage{ 
//}

function getdata(url1) {
    // const res = await fetch(url1);
    // let data = await res.json();
    // console.log(data);
    // console.log("data to be printed");
    // data.map((value) => {
    //     let name1 = `{value.name}`;
    //     let gender = `{value.gender}`;
    //     let picture = `{value.picture}`
    //     locstorage({ name1, gender, picture });
    // });
    fetch(url1).then((data) => {
        data.json().then((fetchdata) => {
            console.log(fetchdata)
            localStorage.setItem("Staffinfo", JSON.stringify(fetchdata.results));
            console.log(localStorage)
        })
        console.log("hello");
        // fetchdata.map((value) => {
        //     let name1 = `{value.name}`;
        //     let gender = `{value.gender}`;
        //     let picture = `{value.picture}`
        //     locstorage({ name1, gender, picture });
        //});
        display();
    });
}
getdata(url);

function display() {
    let data = JSON.parse(localStorage.getItem("Staffinfo"));
    console.log(data);
    var detail = " ";
    data.map(value => {
        console.log(value);
        detail += `
        <div class="display">
        <img src=${value.picture.large}>
        <span class="details">
        <p>Name:${value.name.title} ${value.name.first}</p>
        <p >Email:${value.email}</p>
        <p>Gender:${value.gender}</p>
        </span>
        <div>`
    });
    document.getElementById("fetch").innerHTML = detail;

}


// function locstorage(sdata) {
//     locstorage.push(sdata);
//     localStorage.setitem("Staffinfo", JSON.stringify(sdata));

// }