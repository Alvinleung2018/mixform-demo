const createObj = (keyX, keyY, role, roleArr, arrX, arrY) => {
    const arr = []
    const arr2 = []
    for (let i = 0; i < arrX.length; i++) {
        let obj = {}
        let obj2 = {}
        obj[keyX] = arrX[i]
        // obj2[keyX] = arrX[i]
        // obj[role] = roleArr[0]
        // obj2[role] = roleArr[1]
        console.log('!!!',arrX[i])
        arr.push(obj, obj2)
        console.log(arr)
    }
    for (let j = 0; j < arrY.length; j++) {
        let obj3 = {}
        obj3[keyY] = arrY[j]
        arr2.push(obj3)
        // console.log(obj3)
    }
    const res = arr.map((item,index) => {
        return {...item, ...arr2[index]};
    });
    return res
}


// createObj('name', [1,2,3,4])
console.log(createObj('day', 'capital','role',['main forces', 'retail investors'],[1,2,3,4], [1,2,3,4, 5, 6, 7, 8]))

const a = [
    {
        id: 1,
        fundCode: '110022',
        fundName: '易方达消费行业股票',
        fundType: '股票型',
        fundManager: '萧楠',
        fundSize: [
            {
                quarter: '2018-03',
                size: '172.08',
                program: '基金规模'
            },
            {
                quarter: '2018-06',
                size: '168.73',
                program: '基金规模'
            },
            {
                quarter: '2018-09',
                size: '158.47',
                program: '基金规模'
            },
            {
                quarter: '2018-12',
                size: '136.71',
                program: '基金规模'
            },
        ]
    }
]

const createFundObj = (keyArr, valueArr, childKeyArr = [], childValueArr = []) => {
    const arr = []
    const arr2 = []
    for (let i = 0; i < valueArr.length; i++) {
        let obj = {}
        // if(keyArr.length === valueArr.length) {
        // obj[keyArr[0]] = valueArr[i]
        for(let k = 0; k < valueArr.length; k++) {
            obj[keyArr[0]] = valueArr[i][0]
            // if() {
            //
            // }
            console.log(obj)
        }
        // console.log(obj)
        arr.push(obj)
        // }
    }
    if(arr2.length !== 0) {
        for (let j = 0; j < childKeyArr.length; j++) {
            let obj = {}
            if(childKeyArr.length === childValueArr.length) {
                obj[childKeyArr[i]] = childValueArr[i]
                arr2.push(obj)
            }
        }
        const res = arr.map((item,index) => {
            return {...item, ...arr2[index]};
        });
        return res
    } else {
        if(arr.length === 0) {
            console.error('数组长度不一致')
        } else {
            return arr
        }
    }
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(...arr)

console.log(createFundObj(["name", "age"], [
    ["lisi", "zhangsan", "wangwu"],
    ["17", "18", "19"]
]))