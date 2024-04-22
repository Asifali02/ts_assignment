//making a Array of Countries and prient its Orginal Order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);

//print the array in Alphabetical Order without modifing the actual Array List
console.log("Alphabetical Order:", ...[countriesToVisit].sort());

// show that the array is still in its orignal order
console.log("still in Orignal Order:", countriesToVisit);

// print a array is Revers Order without a modifying the actual Array list 
console.log("Revers Order:", [...countriesToVisit].reverse());

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