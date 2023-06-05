import { combineReducers } from "redux";
import color from './modules/color';
import count from './modules/count';
import animal from './modules/animal';

export default combineReducers({
    // 변수 : 값
    color,   // color: color 이름이 같으면 생략 가능
    count: count,  // count: count 이름이 다르면 생략 불가능
    animal
})