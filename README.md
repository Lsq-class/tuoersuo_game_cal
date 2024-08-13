
## 项目启动：
node >= 18
修改代码中百度接口ak sk
```bash
yarn
yarn dev
cd package/src
node service.js
```


> 最近闲的没事干，迷上了一款微信小游戏《开局托儿所》，羊了个羊出品，游戏大致规则是开始会生成16✖️10的随机1到9的数字，相邻数字相加为0即可消除，在规定时间内消除数字即可得分。👌非常简单。
> 

> 源码链接：https://github.com/Lsq-class/tuoersuo_game_cal
> 

游戏截图：（注：这个游戏有时间限制，而且消除到最后会进入死局）

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d9d6b740-09fa-40a7-819b-45114dd52f0b/9433a937-15fb-4fa5-83bc-3422ef24f56d/image.png)

破解思路：

1. 将游戏中的画面用截图软件截取图片。再通过文字识别识别出所有数字。（同时需要识别文字位置）
2. 将数字呈现到自己的网页中。
3. 使用暴力破解算法将相邻和为10的用属性标注出。（这里需要注意要将已经参与计算的数据在第二次计算时跳过该区域数据）—-使用到遍历子矩阵求和
4. 将相邻和为10的数据用颜色区分出来，呈现到页面上。
5. 循环3、4步操作，直到未标注元素内，无法凑齐和为10的数据，即停止循环

最终破解图：

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d9d6b740-09fa-40a7-819b-45114dd52f0b/bdcf58c7-52e1-456d-932d-5dfbe9b7b926/image.png)

实现步骤：

### 1 、将游戏中的画面用截图软件截取图片。再通过文字识别识别出所有数字。

这里的截图我使用到了mac的截图脚本，利用脚本截图替换原有图片

```bash
set saveFolder to "./asset"

-- 清空指定文件夹中的文件
do shell script "rm -rf " & quoted form of (saveFolder & "./asset/*")

-- 拼接保存路径
set savePath to saveFolder & "/image.png"

-- 执行截图命令并保存到指定路径
do shell script "screencapture -R 10,194,351,561 " & quoted form of savePath
```

先将小游戏放置到左下角（可修改脚本中图片位置参数’screencapture -R 10,194,351,561’），启动脚本即可自动截图保存到指定文件夹。

```bash
osascript scpt脚本文件位置
```

图片文字识别，这里用到了百度的文字识别接口，准确性十分高。（每月接口免费调用次数根本用不完）—注意：第三方接口需要通过node服务调用，否则会出现跨域问题，不清楚的同学可以复习一下跨域

```jsx
const prot = 3000; // 端口号
const hostName = '127.0.0.1'; //代理服务器主机名
const myhttp = require('http'); //服务器-浏览器交互遵循http协议，导入http模块，此为node自带
var querystring = require('querystring');

const myserver = myhttp.createServer((req, res) => {
    // 通过http模块的createServer方法去创建服务，req为请求对象， res为响应对象
    console.log('server running')
    // 需求：  如果请求路径是 / 返回首页html  如果是login返回登录html
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });

    // 1.获取客户端请求路径
    let url = req.url

    // 2.处理请求
    // 一般如果响应的是文件，不需要设置响应头，直接返回二进制数据。浏览器会自动识别数据类型并且加载
    if (url == '/') {
        //响应首页
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(data)
                //3，将读取好的文件数据响应给客户端
                res.end(data)
            }
        })
    } else if (url == '/login') {
        //响应登录页
        fs.readFile(path.join(__dirname, 'login.html'), (err, data) => {
            if (err) {
                throw err
            } else {
                //3，将读取好的文件数据响应给客户端
                res.end(data)
            }
        })
    } else if (url.indexOf('/getImageData') !== -1) {
        var str = '';
        var i = 0;
        req.on('data', function (data) {
            console.log(`第${++i}次收到数据`, data.toString());
            const dataStr = data.toString()
            // dataStr?.splice("name")[1]?.splice("--")[0]
            str += data;
        }); // 当有一段数据到达的时候
        req.on('end', function () {
            var POST = querystring.parse(str);
            const request = require('request')
            const AK = "" //百度接口控制台提供
            const SK = "" //百度接口控制台提供

            async function main() {
                const options = {
                    'method': 'POST',
                    'url': 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate?access_token=' + await getAccessToken(),
                    'headers': {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                    },
                    form: {
                        image: getFileContentAsBase64("./asset/image.png"),
                        'detect_direction': 'false',
                        'vertexes_location': 'false',
                        'paragraph': 'false',
                        'probability': 'false'
                    }
                };

                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    console.log(response.body);
                    res.end(response.body)
                });
            }

            /**
             * 使用 AK，SK 生成鉴权签名（Access Token）
             * @return string 鉴权签名信息（Access Token）
             */
            function getAccessToken() {

                let options = {
                    'method': 'POST',
                    'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
                }
                return new Promise((resolve, reject) => {
                    request(options, (error, response) => {
                        if (error) { reject(error) }
                        else { resolve(JSON.parse(response.body).access_token) }
                    })
                })
            }
            main();
        }); // 数据全部到达

    } else {
        res.end('404 not found')
    }

})
myserver.listen(prot, hostName, function () {
    console.log(`server running.... at ${hostName}:${prot}`)
})

function getFileContentAsBase64(path) {
    const fs = require('fs');
    try {
        return fs.readFileSync(path, { encoding: 'base64' });
    } catch (err) {
        throw new Error(err);
    }
}
```

### 2、将文字识别的数字呈现到页面上

这里用到了css flex布局

```tsx
import { useEffect, useState } from "react";
import "./index.scss"
import { fetchArr } from "./fetch";

interface IObjectProp {
    value: any;
    isSumTenArea: boolean;
    color: string;
}

export function Web() {
    return (

        <>
            {allData?.map((mains: any) => <div className="App">
                {mains?.map((items: any) => {
                    return <div className="line-div">
                        {
                            items?.map((element: any) => <div className={element?.isSumTenArea ? "red" : ""} style={{ background: element?.color, color: element?.color ? 'white' : "black" }}>
                                {element?.value}
                            </div>)
                        }
                    </div>
                })}
            </div>)}
        </>
    )
}
export default Web
```

scss代码：

```scss
.App{
    margin-top: 20px;
    margin-right: 20px;
    display: inline-block;
    .red {
        color: red;
    }
    .line-div {
        display: flex;
        div {
            border: 1px solid black;
            width: 20px;
            // color: ;
        }
    }

}
```

### 3、使用暴力破解将矩阵内按顺序求和子矩阵，并且将相邻和为10的数据用颜色区分出来，呈现到页面上

这里使用了粗暴的爆破算法，若有其它好的优化算法，请指正修改，或在github修改

```tsx
import { useEffect, useState } from "react";
import "./index.scss"
import { fetchArr } from "./fetch";

interface IObjectProp {
    value: any;
    isSumTenArea: boolean;
    color: string;
}

let indexEnd = 1;

let twoMatrixValue: any = null
export function Web() {
    const [data, setData] = useState<any>([])
    const [allData, setAllData] = useState<any>([])
    const [matrixValue, setMatrixValue] = useState<any>(null)
    useEffect(() => {
        reload()
        // debugger
    }, [])
    const reload = async () => {
        getBase64Image("../../../assets/image.png").then(async (res) => {
            // debugger
            fetchArr(res).then((content: any) => {
                const resultArr = content.words_result
                // debugger
                // const data = convertTo2DArray(resultArr, 16, 10)
                const initArr: any = generateMatrix(16, 10, resultArr)
                setData(initArr)
            })
        })    }
    function convertTo2DArray(arr: any, rows: any, cols: any) {
        const result = [];
        let index = 0;

        for (let i = 0; i < rows; i++) {
            const row = [];

            for (let j = 0; j < cols; j++) {
                if (index < arr.length) {
                    row.push(arr[index]);
                    index++;
                } else {
                    row.push(null);
                }
            }

            result.push(row);
        }

        return result;
    }
    const getBase64Image = (src: any) => {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest()
            xhr.open('get', src, true)
            xhr.responseType = 'blob'
            xhr.onload = function () {
                if (this.status == 200) {
                    let blob = this.response
                    let oFileReader = new FileReader()
                    oFileReader.onloadend = function (e: any) {
                        const base64 = e.target.result
                        resolve(base64)
                    }
                    oFileReader.readAsDataURL(blob)
                }
            }
            xhr.send()
        })
    }
    function generateMatrix(rows: any, cols: any, intoMatrix?: any) {
        let matrix = [];
        if (intoMatrix?.length > 0) {
            const parseData = intoMatrix.map(v => {
                return { ...v, value: Number(v?.words), isSumTenArea: false }
            })
            matrix = convertTo2DArray(parseData, 16, 10)
        } else {
            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < cols; j++) {
                    const randomNum = Math.floor(Math.random() * 9) + 1;
                    row.push({ value: randomNum, isSumTenArea: false });
                }
                matrix.push(row);
            }
        }
        const aDD: any = []
        calculateSubmatrixSums(matrix, aDD)
        setAllData(aDD)
        return matrix;
    }
    function mergeArr(arr: any) {
        let arrObj = arr[0]
        const newArr: any = [];
        arr?.forEach((matrix: any, index: number) => {
            const rows = matrix.length;
            const cols = matrix[0].length;
            const deepCloneArr = JSON.parse(JSON.stringify(arr[0]))
            if (!(index % 3)) {
                arrObj = JSON.parse(JSON.stringify(arr[index]))
                newArr.push(deepCloneArr)
            }
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    mergeObject(arrObj[i][j], arr[index][i][j])
                }
            }
        })
        return newArr;
    }
    function mergeObject(mainObj: IObjectProp, copyObj: IObjectProp) {
        if (copyObj.isSumTenArea) {
            mainObj.isSumTenArea = true
            mainObj.color = copyObj.color
        }

    }
    function calculateSubmatrixSums(matrix: any, allDATA: any) {
        initArr(matrix)
        const copyMatrix = JSON.parse(JSON.stringify(matrix))
        const rows = matrix.length;
        const cols = matrix[0].length;

        // 创建一个辅助矩阵来保存每个位置的累积和
        // auxiliary[i][j] 表示以 matrix[i][j] 为右下角的子矩阵的和
        const auxiliary = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill({ value: 0, isSumTenArea: false }));

        // 计算累积和
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                auxiliary[i][j] =
                {
                    value: auxiliary[i - 1][j].value
                        + auxiliary[i][j - 1].value
                        - auxiliary[i - 1][j - 1].value
                        + matrix[i - 1][j - 1].value,
                    isSumTenArea: false,
                };
            }
        }

        // 遍历所有子矩阵并计算它们的和
        for (let startRow = 0; startRow < rows; startRow++) {
            for (let startCol = 0; startCol < cols; startCol++) {
                for (let endRow = startRow; endRow < rows; endRow++) {
                    for (let endCol = startCol; endCol < cols; endCol++) {
                        const submatrixSum =
                            auxiliary[endRow + 1][endCol + 1].value -
                            auxiliary[startRow][endCol + 1].value -
                            auxiliary[endRow + 1][startCol].value +
                            auxiliary[startRow][startCol].value;
                        if (submatrixSum === 10) {
                            
                            updateSubmatrix(matrix, startRow, endRow, startCol, endCol)
                            updateSubmatrix1(copyMatrix, startRow, endRow, startCol, endCol, 0)
                            
                            console.log('子矩阵和：', submatrixSum, "开始列", startCol, endCol, "开始行", startRow, endRow);
                        }
                    }
                }
            }
        }
        indexEnd++;
        allDATA.push(matrix)
        // debugger
        // debugger
        if (indexEnd !== 24) {
            calculateSubmatrixSums(copyMatrix, allDATA)
        }

    }
    const initArr = (matrix: any) => {
        // debugger
        const rows = matrix.length;
        const cols = matrix[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = {
                    value: matrix[i][j].value,
                    isSumTenArea: false,
                }
            }
        }
    }
    function updateSubmatrix(matrix: any, startRow: any, endRow: any, startCol: any, endCol: any, value?: any) {
        let isRepeat = false;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (matrix[i][j]?.isSumTenArea) {
                    isRepeat = true;
                }
            }
        }
        if (!isRepeat) {
            let color = getRandomColor()
            for (let i = startRow; i <= endRow; i++) {
                for (let j = startCol; j <= endCol; j++) {
                    matrix[i][j] = {
                        value: matrix[i][j].value,
                        isSumTenArea: true,
                        color,

                    };
                }
            }
        }

    }
    function updateSubmatrix1(matrix: any, startRow: any, endRow: any, startCol: any, endCol: any, value?: any) {
        let isRepeat = false;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (matrix[i][j]?.isSumTenArea === true) {
                    isRepeat = true;
                }
            }
        }
        if (!isRepeat) {
            // let color = getRandomColor()
            for (let i = startRow; i <= endRow; i++) {
                for (let j = startCol; j <= endCol; j++) {
                    matrix[i][j] = {
                        value: 0,
                        isSumTenArea: true,
                        // color,
                    };
                }
            }
        }

    }
    const colors = ['red', 'green', 'darkorange', 'blue'];
    let colorIndex = 0;

    function getRandomColor() {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        return color;
    }

    return (

        <>
            {allData?.map((mains: any) => <div className="App">
                {mains?.map((items: any) => {
                    return <div className="line-div">
                        {
                            items?.map((element: any) => <div className={element?.isSumTenArea ? "red" : ""} style={{ background: element?.color, color: element?.color ? 'white' : "black" }}>
                                {element?.value}
                            </div>)
                        }
                    </div>
                })}
            </div>)}
        </>
    )
}

export default Web
```
