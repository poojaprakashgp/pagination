let arr = [{ 1: 1 }, { 2: 2 }, { 3: 3 }, { 4: 4 }, { 5: 5 }, { 6: 6 }, { 7: 7 }, { 8: 8 }, { 9: 9 }, { 10: 10 }];
let totalitems = 10;
let noitemsperpage = 6;
let totalpages = Math.ceil(totalitems / noitemsperpage);
console.log("=====total pages", totalpages);

let startpage = 2;
let endpage = totalpages;
let startindex = (startpage - 1) * noitemsperpage;
let endindex = (startpage) * noitemsperpage;
let nextpage;
let previous;
console.log("startindex", startindex, 'endindex', endindex);

if (startindex <= 0) {
    startindex = 0;
}
let a = document.getElementById('pages');
for (let i = 0; i < totalpages; i++) {
    let b = document.createElement('a');

    let c = document.createElement('br');
    b.innerHTML = i + 1;
    a.appendChild(b);

}
if (startindex > totalitems || endindex > totalitems) {
    console.log("error")
} else if (startindex == endindex) { console.log("no items found") } else {
   // for (let i = startindex; i < endindex; i++) {
   //    console.log(arr[i]);
   //     document.getElementsByClassName('pageContent').innerHTML = Object.keys(arr[i]);
   // }
}
console.log("document.getElementsByClassName('pageContent').innerHTML", document.getElementsByClassName('pageContent').innerHTML);

document.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'prev') {
        if (startpage <= 1) {
            console.log("----- can't be less than 1==");
            startpage = 1;
        } else {
            console.log("===startpage before once prev clicked", startpage);
            startpage = startpage - 1;
        }

        console.log("===startpage once prev clicked", startpage);
        startindex = ((startpage) - 1) * noitemsperpage;
        endindex = (startpage) * noitemsperpage;

        console.log("====iwhen prev is clicked", startindex, endindex)
        for (let i = startindex; i < endindex; i++) {
            console.log(arr[i]);
            document.getElementsByClassName('pageContent').innerHTML = arr[i] ? Object.keys(arr[i]) : '';
        }
    }
    if (e.target.innerHTML == 'next') {
        console.log("===startpage before once next clicked", startpage);
        if (startpage >= totalpages) {
            console.log("can't more than totolpages");
            startpage = totalpages;
        } else {
            startpage = startpage + 1;
        }

        console.log("===startpage once next clicked", startpage);
        startindex = ((startpage) - 1) * noitemsperpage;
        endindex = (startpage) * noitemsperpage;

        console.log("====iwhen next is clicked", startindex, endindex)
        for (let i = startindex; i < endindex; i++) {
            console.log(arr[i]);
            document.getElementsByClassName('pageContent').innerHTML = arr[i] ? Object.keys(arr[i]) : '';
        }
    }
    console.log(e.target.innerHTML, "---", typeof +e.target.innerHTML, +e.target.innerHTML)
    if (typeof +e.target.innerHTML == 'number' &&
        !Number.isNaN(+e.target.innerHTML)) {
        startindex = (+e.target.innerHTML - 1) * noitemsperpage;
        endindex = +e.target.innerHTML * noitemsperpage;
        console.log(" before inside type of if condition", startpage)
        startpage = +e.target.innerHTML;
        console.log("inside type of if condition", startpage)
        for (let i = startindex; i < endindex; i++) {
            console.log(arr[i]);
            document.getElementsByClassName('pageContent').innerHTML = arr[i] ? Object.keys(arr[i]) : '';
        }
    }
})
