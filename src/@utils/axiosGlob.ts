import axios from 'axios';
// axios.defaults.baseURL = 'http://172.31.11.59:8080'; //베이스 url글로벌 설정
axios.defaults.baseURL = 'http://172.31.11.59'; //베이스 url글로벌 설정
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // 서버에서 받아온 토큰값을 저장후 글로벌로 헤더에설정
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';