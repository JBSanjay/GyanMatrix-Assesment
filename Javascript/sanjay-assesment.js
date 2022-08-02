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
        <section class="display">
        <img src=${value.picture.large}>
        <span class="details">
        <p>Name:${value.name.title} ${value.name.first}</p>
        <p >Email:${value.email}</p>
        <p>Gender:${value.gender}</p>
        </span>
        <section>`
    });
    document.getElementById("fetch").innerHTML = detail;
}

function search = () => {
    // event.preventDefault()
    // let val = document.getElementById("searchbars").value;

    // let storage = JSON.parse(localStorage.getItem("Staffinfo"));
    // console.log(storage);

    // let resvalue = storage.filter((obj) => obj.name.first === val);
    // console.log(resvalue);
    // var detail2 = '';
    // resvalue.map(function(obj) {
    //     detail2 = `
    //         <div class="display">
    //         <img src=${value.picture.large}>
    //         <span class="details">
    //         <p>Name:${value.name.title} ${value.name.first}</p>
    //         <p >Email:${value.email}</p>
    //         <p>Gender:${value.gender}</p>
    //         </span>
    //        <div>`
    // });

    // console. charInfo = "";
    let newdata = JSON.parse(localStorage.getItem("Staffinfo"));
    let val = document.querySelector('.searchbars').value
    let charInfo = "";
    let data = newdata.filter((item) => item.name.first === val);
    data.map(function(obj) {
        charInfo += `
        <div class="display">
            <img src=${obj.value.picture.large}>
            <span class="details">
            <p>Name:${obj.name.title} ${value.name.first}</p>
            <p >Email:${obj.email}</p>
            <p>Gender:${obj.gender}</p>
            </span>
           <div>`
    });
    console.log(charInfo);
    document.getElementById("search1").innerHTML = charInfo;
    // temp = storage.foreach(myfunction);
    // myfunction();

    // function myfunction() {
    //     if (value == Staffinfo.name.first) {
    //         detail2 = `
    //         <div class="display">
    //         <img src=${value.picture.large}>
    //         <span class="details">
    //         <p>Name:${value.name.title} ${value.name.first}</p>
    //         <p >Email:${value.email}</p>
    //         <p>Gender:${value.gender}</p>
    //         </span>
    //         <div>`
    //     }
    //     document.getElementById("fetch").innerHTML = detail2;
    // }

}
// function locstorage(sdata) {
//     locstorage.push(sdata);
//     localStorage.setitem("Staffinfo", JSON.stringify(sdata));

// }`