export const createObj = (keyX, keyY, role, roleArr, arrX, arrY) => {
    const arr = []
    const arr2 = []
    for (let i = 0; i < arrX.length; i++) {
        let obj = {}
        let obj2 = {}
        obj[keyX] = arrX[i]
        obj2[keyX] = arrX[i]
        obj[role] = roleArr[0]
        obj2[role] = roleArr[1]
        arr.push(obj, obj2)
    }
    for (let j = 0; j < arrY.length; j++) {
        let obj3 = {}
        obj3[keyY] = arrY[j]
        arr2.push(obj3)
    }
    const res = arr.map((item,index) => {
        return {...item, ...arr2[index]};
    });
    return res
}


// createObj('name', [1,2,3,4])
console.log(createObj('day', 'capital','role',['main forces', 'retail investors'],[1,2,3,4], [1,2,3,4, 5, 6, 7, 8]))