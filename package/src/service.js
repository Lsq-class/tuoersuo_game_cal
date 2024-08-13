const prot = 3000; // 端口号
const hostName = '127.0.0.1'; //代理服务器主机名
const myhttp = require('http'); //服务器-浏览器交互遵循http协议，导入http模块，此为node自带
var querystring = require('querystring');

const myserver = myhttp.createServer((req, res) => {
    //通过http模块的createServer方法去创建服务，req为请求对象， res为响应对象
    console.log('server running')
    //需求：  如果请求路径是 / 返回首页html  如果是login返回登录html
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });

    //1.获取客户端请求路径
    let url = req.url

    //2.处理请求
    //一般如果响应的是文件，不需要设置响应头，直接返回二进制数据。浏览器会自动识别数据类型并且加载
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
            // console.log(POST, POST.image);

            // 示例用法
            // const params = getUrlParams(url?.split("?")[1]);
            // console.log(params, "imgage");
            const request = require('request')
            const AK = "EareBU79MZ7n9T5EQhbUmfhQ"
            const SK = "teNgyues8xniQrDpRQEsr6qLMhk21cZB"

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
//通过http的的listen方法去监听服务器运行，这里console.log的内容可以不用顾虑，只是模板字符串的变量引入，不作讲解

function getUrlParams(queryString) {
    const urlParams = {};
    // const queryString = window.location.search.substr(1);
    const paramPairs = queryString.split('&');

    paramPairs.forEach(pair => {
        const [key, value] = pair.split('=');
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value);

        if (urlParams.hasOwnProperty(decodedKey)) {
            if (Array.isArray(urlParams[decodedKey])) {
                urlParams[decodedKey].push(decodedValue);
            } else {
                urlParams[decodedKey] = [urlParams[decodedKey], decodedValue];
            }
        } else {
            urlParams[decodedKey] = decodedValue;
        }
    });

    return urlParams;
}

function getFileContentAsBase64(path) {
    const fs = require('fs');
    try {
        return fs.readFileSync(path, { encoding: 'base64' });
    } catch (err) {
        throw new Error(err);
    }
}





