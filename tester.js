const axios = require('axios').default;
const TEST_NUMBER = parseInt(process.env.TEST_NUMBER) || 30;
function post(data) {
    return axios.post('http://localhost:3000/transact', {
        "data": data
    });
}
function co(number) {
    const start = Date.now();
    let posts = [];
    for (let i = 0; i < number; i++) {
        posts.push(post(i));
    }
    Promise.all(posts)
        .then(function (response) {
            // 处理成功情况
            response.map((data) => {
                console.log(data.data);
            })
            console.log(Date.now() - start, "ms");
        })
}

function cu(number) {
    for (let i = 0; i < number; i++) {
        axios
            .post('http://localhost:3000/transact', {
                "data": i
            })
            .then(function (response) {
                console.log(response.data);
            })
    }
}
function one() {
    axios
        .post('http://localhost:3000/transact', {
            "data": "test1"
        })
        .then(function (response) {
            console.log(response.data);
        })
}
//co(TEST_NUMBER);
//cu(TEST_NUMBER);
one();