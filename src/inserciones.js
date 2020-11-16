db.libros.drop()
db.libros.insertMany([
    
    {_id:1, item:"El Instituto",autor:"Stephen King", qty:15, "fecha": new Date("2020-11-11T16:30:00.000Z"), zona:"A", disponibilidad: false, size:{h:15, w:4, uom:"cm"}},
    {_id:2, item:"It",autor:"Stephen King", qty:35, "fecha": new Date("2020-10-23T10:10:00.000Z"), zona:"A", disponibilidad: true, size:{h:12.5, w:6, uom:"cm"}},
    {_id:3, item:"Las aventuras de Tom Sawyer",autor:"Mark Twain", qty:18, "fecha": new Date("2020-10-01T12:45:00.000Z"), zona:"B", disponibilidad: true, size:{h:17, w:3, uom:"cm"}},
    {_id:4, item:"La ratonera", autor:"Agatha Christie", qty:30, "fecha": new Date("2020-10-07T22:05:00.000Z"), zona:"D", disponibilidad: true, size:{h:20, w:4, uom:"cm"}},
    {_id:5, item:"Asesinato en el Orient Express", autor:"Agatha Christie", qty:12, "fecha": new Date("2020-11-17T18:35:00.000Z"), zona:"A", disponibilidad: false, size:{h:15, w:3, uom:"cm"}},
])

db.libros.insertMany([
    {_id:6, item:"El incleible Hulk",autor:"Stan Lee", qty:5, "fecha": new Date("2020-10-15T17:00:00.000Z"), zona:"C", disponibilidad: true, size:{h:11.5, w:2.5, uom:"cm"}},
    {_id:7, item:"El Asombroso Spiderman",autor:"Stan Lee", qty:3, "fecha": new Date("2020-11-13T21:45:00.000Z"), zona:"C", disponibilidad: false, size:{h:26, w:1.5, uom:"cm"}},
    {_id:8, item:"Farenheit 451",autor:"Ray Bradbury", qty:23, "fecha": new Date("2020-10-04T06:40:00.000Z"), zona:"D", disponibilidad: true, size:{h:13, w:3, uom:"cm"}},
    {_id:9, item:"Reina roja",autor:"Juan Gomez Jurado", qty:9, "fecha": new Date("2020-10-12T08:30:00.000Z"), zona:"B", disponibilidad: true, size:{h:16, w:4, uom:"cm"}},
    {_id:10, item:"Harry Poter y la priedra filosofal",autor:"J.K. Rowling", qty:8, "fecha": new Date("2020-11-07T10:15:00.000Z"), zona:"B", disponibilidad: false, size:{h:10.5, w:3.5, uom:"cm"}},
])

db.libros.insertMany([
    {_id:11, item:"Las tinieblas y el alba",autor:"Ken Follet", qty:12, "fecha": new Date("2020-11-20T15:30:00.000Z"), zona:"C", disponibilidad: false, size:{h:11, w:2.5, uom:"cm"}},
    {_id:12, item:"Sidi",autor:"Arturo Perez Reverte", qty:1, "fecha": new Date("2020-11-05T12:25:00.000Z"), zona:"D", disponibilidad: true, size:{h:16, w:2.5, uom:"cm"}},
    {_id:13, item:"Rey Blanco",autor:"Juan Gomez Jurado", qty:10, "fecha": new Date("2020-10-12T14:30:00.000Z"), zona:"B", disponibilidad: true, size:{h:10, w:3, uom:"cm"}},
    {_id:14, item:"A prueba de fuego", autor:"Javier Moro", qty:20, "fecha": new Date("2020-11-10T13:10:00.000Z"), zona:"A", disponibilidad: false, size:{h:10.5, w:1.5, uom:"cm"}},
    {_id:15, item:"El conquistador", autor:"Jose Luis Corral", qty:2, "fecha": new Date("2020-11-10T13:45:00.000Z"), zona:"B", disponibilidad: false, size:{h:17, w:4, uom:"cm"}},
])

db.libros.insertMany([
    {_id:16, item:"La historia de tu vida", autor:"Ted Chiang", qty:4, "fecha": new Date("2020-10-18T15:50:00.000Z"), zona:"D", disponibilidad: true, size:{h:13.5, w:3.5, uom:"cm"}},
    {_id:17, item:"Exhalacion",autor:"Ted Chiang", qty:2, "fecha": new Date("2020-10-23T22:30:00.000Z"), zona:"B", disponibilidad: true, size:{h:10, w:1.5, uom:"cm"}},
    {_id:18, item:"Los pilares de la tierra",autor:"Ken Follet", qty:16, "fecha": new Date("2020-11-13T23:00:00.000Z"), zona:"C", disponibilidad: false, size:{h:13.5, w:4, uom:"cm"}},
    {_id:19, item:"Dune",autor:"Frank Herbert", qty:15, "fecha": new Date("2020-10-16T00:14:50.000Z"), zona:"A", disponibilidad: true, size:{h:12, w:3, uom:"cm"}},
    {_id:20, item:"La quinta victima",autor:"J.D. Barker", qty:13, "fecha": new Date("2020-11-15T19:30:00.000Z"), zona:"B", disponibilidad: false, size:{h:15, w:3.5, uom:"cm"}},
])
