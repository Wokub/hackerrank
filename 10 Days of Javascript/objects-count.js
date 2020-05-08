/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let equals = 0;
    objects.map(data => {
        if(data.x === data.y) {
            equals += 1;
        }
    })
    return equals;
}

