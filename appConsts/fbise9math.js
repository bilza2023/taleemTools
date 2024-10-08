
import {getNewTcode} from "./TcodeObj.js";



const fbise9math =  getNewTcode('fbise9math');
//--do not repeat chapter number , keep it unique
fbise9math.addChapter(1, '1chapter', ['1.1','1.2','1.3'] , 'Real Numbers' );
fbise9math.addChapter(2, 'chapter',  ['2.1','2.2','2.3','2.4','2.5','2.6'] , 'Logarithms');
fbise9math.addChapter(3, 'chapter',  ['3.1','3.2','3.3' , '3.4'] , 'Sets and Relationship');
fbise9math.addChapter(4, 'chapter',  ['4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8'] , 'Factorization and Algebraic Manipulation');
fbise9math.addChapter(5, 'chapter',  ['5.1','5.2','5.3','5.4'] , 'Linear Equation and Inequalities');
fbise9math.addChapter(6, 'chapter',  ['6.1','6.2','6.3','6.4','6.5','6.6'] , 'Trigonometry and Bearing');
fbise9math.addChapter(7, 'chapter',  ['7.1','7.2'] , 'Coordinate Geometry');
fbise9math.addChapter(8, 'chapter',  ['8.1','8.2','8.3','8.4'] , 'Geometry of Straight Lines');
fbise9math.addChapter(9, 'chapter',  ['9.1','9.2','9.3','9.4','9.5','9.6','9.7'] , 'Geometry and Polygons');
fbise9math.addChapter(10, 'chapter',  ['10.1','10.2'] , 'Practical Geometry');
fbise9math.addChapter(11, 'chapter',  ['11.1','11.2','11.3'] , 'Basic Statistics');


export default fbise9math;