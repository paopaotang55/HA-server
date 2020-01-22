요청할 url
http:localhost:4000/users
요청할 mothod
GET
요청할 params 없음

성공하면 서버에서 반환하는 데이터, data배열 10개
{
"code": 0,
"data": [
{
"id": 1,
"name": "이정도"
},
{
"id": 2,
"name": "김재완"
},
{
"id": 3,
"name": "김성은"
}
]
}

실패하면 서버에서 반환하는 데이터
{
code: 1,
message: "서버 에러!!"
};
