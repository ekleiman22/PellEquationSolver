
//int n, int length, out bool found
//return int[]
 function BuildContinuedFractionPeriod( n,  length)
 {
    var result = {}
    var lst =[];
    found = false;
    try {
        let a = 0;//current value fraction double
        const c = Math.sqrt(n); //const double
        let cf = Math.floor(c); 
        let intPart = Math.floor(c);
        
        lst.push(intPart);
        let curTriple = new Triple(0, 1, 1);
        for (var i = 0; i < length; i++)
        {
            let x = curTriple.x;
            let y = curTriple.y;
            let z = curTriple.z;
            let af = intPart;//(int)Math.floor(a);
            //multiple a-alfa[i] by (yc -(x - z * af))
            //to remove radical from denominator
            let denom = y * y * n - (x - z * af) * (x - z * af);
            let newX = z * (z * af - x);
            let newY = z * y;
            let d1 = gcd(newX, newY);
            let d2 = gcd(d1, denom);
            if (d2 > 1) {
                newX /= d2;
                newY /= d2;
                denom /= d2;
            }
            curTriple = new Triple(newX, newY, denom);
            a = (newX + newY * c) / denom;
            intPart = Math.floor(a);
            lst.push(intPart);
            if (intPart == 2 * cf) {
                found = true;
                break;
            }
        }
        result.lst = lst;
        result.found = found;
    }
    catch ( ex)
    {

        throw ex;
    }
     return result;
}


 /// <summary>
        /// This method builds a continuous fraction for a number 
        /// that is square root of integer n that is not exact square
        /// Used https://kazedu.com/referat/29238
        /// On each step we compute a triple  (x,y,z) such that
        ///  alfa[i] = (x+yc)/z ,where c=square root of n
        ///  Because these numbers raise very fast ob each step we search
        ///   greatest common divisor (gcd) of these numbers
        ///   and divide them on gcd
        /// </summary>
        /// <param name="n">input number </param>
        /// <param name="length"> length of continuos fraction</param>
        /// <returns>array containing first values of the fraction</returns>
        function BuildContinuedFraction( n,  length)
{
            let lst = [];
    try {
        let a = Math.sqrt(n);
        const c = Math.sqrt(n); //const
        let intPart = Math.floor(a);
       
        lst.push(intPart);
        let curTriple = new Triple(0, 1, 1);
        for (var i = 0; i < length; i++)
        {
            let x = curTriple.x;
            let y = curTriple.y;
            let z = curTriple.z;
            let af = intPart;//(int)Math.floor(a);
            //multiple a-alfa[i] by (yc -(x - z * af))
            //to remove radical from denominator
            let denom = y * y * n - (x - z * af) * (x - z * af);
            let newX = z * (z * af - x);
            let newY = z * y;
            let d1 = gcd(newX, newY);
            let d2 = gcd(d1, denom);
            if (d2 > 1) {
                newX /= d2;
                newY /= d2;
                denom /= d2;
            }
            curTriple = new Triple(newX, newY, denom);
            a = (newX + newY * c) / denom;
            intPart = Math.floor(a);
            lst.push(intPart);
        }
        
    }
    catch ( ex)
    {

        throw ex;
    }
    return lst;
}

 function ComputeConvergentFraction( arr)
{
     let result = [];
    try {
        let p0 = arr[0];
        let q0 = 1;
        let p1 = arr[0] * arr[1] + 1;
        let q1 = arr[1];
        let p = p1;
        let q = q1;
        for (var i = 2; i < arr.length; i++)
        {
            p = p1 * arr[i] + p0;
            q = q1 * arr[i] + q0;
            p0 = p1;
            q0 = q1;
            p1 = p;
            q1 = q;
        }
        result[0] = p;
        result[1] = q;
    }
    catch ( ex)
    {

        throw ex;
    }
    return result;
}

function gcd( a,  b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

class Triple {
    constructor(x, y, z) {  // Constructor
        this.x = x;
        this.y = y;
        this.z = z;
    }

}