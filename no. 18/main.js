var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a Array of Countries and prient its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);
//print the array in Alphabetical Order without modifing the actual Array List
console.log.apply(console, __spreadArray(["Alphabetical Order:"], [countriesToVisit].sort(), false));
// show that the array is still in its orignal order
console.log("still in Orignal Order:", countriesToVisit);
// print a array is Revers Order without a modifying the actual Array list 
console.log("Revers Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its orignal order
console.log("still in Orignal Order:", countriesToVisit);
// i have chaned the orignal array list revers order
console.log("Orignal Array Reversed:", countriesToVisit.reverse());
//print the array to show thats its back to orignal order
console.log("Back to Orignal Order", countriesToVisit.reverse());
//prient the array to show that its order has been changed in Alphabetical Order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());
// i have chaned again the orignal array list revers order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());
