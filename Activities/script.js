function whatsShallWear(temp) {
    if (temp < 60) { 
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }
}

whatsShallWear(50);
whatsShallWear(80);
whatsShallWear(60);