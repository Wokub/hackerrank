/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
     if ((length < 1 && length > 1000) && (width < 1 && width > 1000)) {
        return 0;
    }

    area = parseFloat(length) * parseFloat(width);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    perimeter = 2 * (parseFloat(length) + parseFloat(width)); 
    return perimeter;
}

