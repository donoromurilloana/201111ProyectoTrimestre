/**Hallar disponibilidad true y entre el rango de fecha */
db.libros.find({$and:[{disponibilidad:false},{"fecha": {"$gt": ISODate("2020-11-01T00:00:00.000Z")}},{"fecha": {"$lt": ISODate("2020-11-15T23:59:59.000Z")}}]})
/**
{ "_id" : 1, "item" : "El Instituto", "autor" : "Stephen King", "qty" : 15, "fecha" : ISODate("2020-11-11T16:30:00Z"), "zona" : "A", "disponibilidad" : false, "size" : { "h" : 15, "w" : 4, "uom" : "cm" } }
{ "_id" : 7, "item" : "El Asombroso Spiderman", "autor" : "Stan Lee", "qty" : 3, "fecha" : ISODate("2020-11-13T21:45:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 26, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 10, "item" : "Harry Poter y la priedra filosofal", "autor" : "J.K. Rowling", "qty" : 8, "fecha" : ISODate("2020-11-07T10:15:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 3.5, "uom" : "cm" } }
{ "_id" : 14, "item" : "A prueba de fuego", "autor" : "Javier Moro", "qty" : 20, "fecha" : ISODate("2020-11-10T13:10:00Z"), "zona" : "A", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 15, "item" : "El conquistador", "autor" : "Jose Luis Corral", "qty" : 2, "fecha" : ISODate("2020-11-10T13:45:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 17, "w" : 4, "uom" : "cm" } }
{ "_id" : 18, "item" : "Los pilares de la tierra", "autor" : "Ken Follet", "qty" : 16, "fecha" : ISODate("2020-11-13T23:00:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 13.5, "w" : 4, "uom" : "cm" } }
{ "_id" : 20, "item" : "La quinta victima", "autor" : "J.D. Barker", "qty" : 13, "fecha" : ISODate("2020-11-15T19:30:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 15, "w" : 3.5, "uom" : "cm" } }
 */

 /**Hallar  la cadena "ei", cantidad mayor de 5 y status diferente a A */
db.libros.find({$and:[{item:{$regex: /ei/}},{qty:{$gte:5}},{zona:{$ne:"A"}}]})
/**
{ "_id" : 6, "item" : "El incleible Hulk", "autor" : "Stan Lee", "qty" : 5, "fecha" : ISODate("2020-10-15T17:00:00Z"), "zona" : "C", "disponibilidad" : true, "size" : { "h" : 11.5, "w" : 2.5, "uom" : "cm" } }
{ "_id" : 8, "item" : "Farenheit 451", "autor" : "Ray Bradbury", "qty" : 23, "fecha" : ISODate("2020-10-04T06:40:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 13, "w" : 3, "uom" : "cm" } }
{ "_id" : 9, "item" : "Reina roja", "autor" : "Juan Gomez Jurado", "qty" : 9, "fecha" : ISODate("2020-10-12T08:30:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 16, "w" : 4, "uom" : "cm" } }
 */

 /**Hallar los que empiecen por J o cantidad mayor de 20 o altura >=17  */
db.libros.find({$or:[{autor:{$regex: /^J/ }},{qty:{$gte:20}},{"size.h": {$gte:17}}]})
/**
{ "_id" : 2, "item" : "It", "autor" : "Stephen King", "qty" : 35, "fecha" : ISODate("2020-10-23T10:10:00Z"), "zona" : "A", "disponibilidad" : true, "size" : { "h" : 12.5, "w" : 6, "uom" : "cm" } }
{ "_id" : 3, "item" : "Las aventuras de Tom Sawyer", "autor" : "Mark Twain", "qty" : 18, "fecha" : ISODate("2020-10-01T12:45:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 17, "w" : 3, "uom" : "cm" } }
{ "_id" : 4, "item" : "La ratonera", "autor" : "Agatha Christie", "qty" : 30, "fecha" : ISODate("2020-10-07T22:05:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 20, "w" : 4, "uom" : "cm" } }
{ "_id" : 7, "item" : "El Asombroso Spiderman", "autor" : "Stan Lee", "qty" : 3, "fecha" : ISODate("2020-11-13T21:45:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 26, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 8, "item" : "Farenheit 451", "autor" : "Ray Bradbury", "qty" : 23, "fecha" : ISODate("2020-10-04T06:40:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 13, "w" : 3, "uom" : "cm" } }
{ "_id" : 9, "item" : "Reina roja", "autor" : "Juan Gomez Jurado", "qty" : 9, "fecha" : ISODate("2020-10-12T08:30:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 16, "w" : 4, "uom" : "cm" } }
{ "_id" : 10, "item" : "Harry Poter y la priedra filosofal", "autor" : "J.K. Rowling", "qty" : 8, "fecha" : ISODate("2020-11-07T10:15:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 3.5, "uom" : "cm" } }      
{ "_id" : 13, "item" : "Rey Blanco", "autor" : "Juan Gomez Jurado", "qty" : 10, "fecha" : ISODate("2020-10-12T14:30:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 10, "w" : 3, "uom" : "cm" } }
{ "_id" : 14, "item" : "A prueba de fuego", "autor" : "Javier Moro", "qty" : 20, "fecha" : ISODate("2020-11-10T13:10:00Z"), "zona" : "A", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 15, "item" : "El conquistador", "autor" : "Jose Luis Corral", "qty" : 2, "fecha" : ISODate("2020-11-10T13:45:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 17, "w" : 4, "uom" : "cm" } }
{ "_id" : 20, "item" : "La quinta victima", "autor" : "J.D. Barker", "qty" : 13, "fecha" : ISODate("2020-11-15T19:30:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 15, "w" : 3.5, "uom" : "cm" } }
*/

/**Hallar los que acaben en a, no pertenezcan a A , cantidad mayor o igual a 30, y fecha menor 31/10*/
db.libros.find({$and:[{item:{$regex:/a$/}},{status:{$ne:"A"}},{qty:{$gte:30}},{"fecha": {"$lte": ISODate("2020-10-31")}}]})
/**
{ "_id" : 4, "item" : "La ratonera", "autor" : "Agatha Christie", "qty" : 30, "fecha" : ISODate("1970-01-01T00:00:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 20, "w" : 4, "uom" : "cm" } }
 */

/**Hallar item que acabe en ia o cantidad >40 o fecha >10/11, ordenado alfabeticamente por autor*/ 
db.libros.find({$or:[{item:{$regex:/^L/}},{qty:{"$gte":20}},{zona:"C"} ]}).sort({autor:1})
/**
{ "_id" : 4, "item" : "La ratonera", "autor" : "Agatha Christie", "qty" : 30, "fecha" : ISODate("2020-10-07T22:05:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 20, "w" : 4, "uom" : "cm" } }
{ "_id" : 20, "item" : "La quinta victima", "autor" : "J.D. Barker", "qty" : 13, "fecha" : ISODate("2020-11-15T19:30:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 15, "w" : 3.5, "uom" : "cm" } }      
{ "_id" : 14, "item" : "A prueba de fuego", "autor" : "Javier Moro", "qty" : 20, "fecha" : ISODate("2020-11-10T13:10:00Z"), "zona" : "A", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 1.5, "uom" : "cm" } }    
{ "_id" : 11, "item" : "Las tinieblas y el alba", "autor" : "Ken Follet", "qty" : 12, "fecha" : ISODate("2020-11-20T15:30:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 11, "w" : 2.5, "uom" : "cm" } } 
{ "_id" : 18, "item" : "Los pilares de la tierra", "autor" : "Ken Follet", "qty" : 16, "fecha" : ISODate("2020-11-13T23:00:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 13.5, "w" : 4, "uom" : "cm" } }
{ "_id" : 3, "item" : "Las aventuras de Tom Sawyer", "autor" : "Mark Twain", "qty" : 18, "fecha" : ISODate("2020-10-01T12:45:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 17, "w" : 3, "uom" : "cm" } } 
{ "_id" : 8, "item" : "Farenheit 451", "autor" : "Ray Bradbury", "qty" : 23, "fecha" : ISODate("2020-10-04T06:40:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 13, "w" : 3, "uom" : "cm" } }
{ "_id" : 6, "item" : "El incleible Hulk", "autor" : "Stan Lee", "qty" : 5, "fecha" : ISODate("2020-10-15T17:00:00Z"), "zona" : "C", "disponibilidad" : true, "size" : { "h" : 11.5, "w" : 2.5, "uom" : "cm" } }
{ "_id" : 7, "item" : "El Asombroso Spiderman", "autor" : "Stan Lee", "qty" : 3, "fecha" : ISODate("2020-11-13T21:45:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 26, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 2, "item" : "It", "autor" : "Stephen King", "qty" : 35, "fecha" : ISODate("2020-10-23T10:10:00Z"), "zona" : "A", "disponibilidad" : true, "size" : { "h" : 12.5, "w" : 6, "uom" : "cm" } }
{ "_id" : 16, "item" : "La historia de tu vida", "autor" : "Ted Chiang", "qty" : 4, "fecha" : ISODate("2020-10-18T15:50:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 13.5, "w" : 3.5, "uom" : "cm" } }
 */

/**Hallar autor que no sea igual a la cadena, cantidad distinta a 15, entre el rango de fechas 01/11-15/11, disponibilidad false, size no coincida con los valores */
db.libros.find({$and:[{autor:{$ne:[/^J/,/^M/]}},{qty:{$ne:15}},{"fecha": {"$gt": ISODate("2020-11-01")}},{"fecha": {"$lt": ISODate("2020-11-15")}},{disponibilidad: false},{"size.w":{$nin:[4,2.5]}}]}).count()
/**
{ "_id" : 7, "item" : "El Asombroso Spiderman", "autor" : "Stan Lee", "qty" : 3, "fecha" : ISODate("2020-11-13T21:45:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 26, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 10, "item" : "Harry Poter y la priedra filosofal", "autor" : "J.K. Rowling", "qty" : 8, "fecha" : ISODate("2020-11-07T10:15:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 3.5, "uom" : "cm" } }
{ "_id" : 14, "item" : "A prueba de fuego", "autor" : "Javier Moro", "qty" : 20, "fecha" : ISODate("2020-11-10T13:10:00Z"), "zona" : "A", "disponibilidad" : false, "size" : { "h" : 10.5, "w" : 1.5, "uom" : "cm" } } */

 /**hallar item con cadena ui, autor acabado en er, size igual a 10 - 13.5 o fecha igual a 11-10 */
 db.libros.find({$or:[{item:{$eq:/ui/}},{autor:{$regex:/er$/}},{"size.h":{$in:[10,13.5]}},{"fecha":{$eq: ISODate("2020-10-11")}} ]})
/**
{ "_id" : 13, "item" : "Rey Blanco", "autor" : "Juan Gomez Jurado", "qty" : 10, "fecha" : ISODate("2020-10-12T14:30:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 10, "w" : 3, "uom" : "cm" } }
{ "_id" : 16, "item" : "La historia de tu vida", "autor" : "Ted Chiang", "qty" : 4, "fecha" : ISODate("2020-10-18T15:50:00Z"), "zona" : "D", "disponibilidad" : true, "size" : { "h" : 13.5, "w" : 3.5, "uom" : "cm" } }
{ "_id" : 17, "item" : "Exhalacion", "autor" : "Ted Chiang", "qty" : 2, "fecha" : ISODate("2020-10-23T22:30:00Z"), "zona" : "B", "disponibilidad" : true, "size" : { "h" : 10, "w" : 1.5, "uom" : "cm" } }
{ "_id" : 18, "item" : "Los pilares de la tierra", "autor" : "Ken Follet", "qty" : 16, "fecha" : ISODate("2020-11-13T23:00:00Z"), "zona" : "C", "disponibilidad" : false, "size" : { "h" : 13.5, "w" : 4, "uom" : "cm" } }
{ "_id" : 20, "item" : "La quinta victima", "autor" : "J.D. Barker", "qty" : 13, "fecha" : ISODate("2020-11-15T19:30:00Z"), "zona" : "B", "disponibilidad" : false, "size" : { "h" : 15, "w" : 3.5, "uom" : "cm" } }
 */