// 1. 액션 생성 - 모듈이름을 앞에 붙여줌으로써 액션 이름의 중복을 방지
const TIGER = 'animal/TIGER'
const DOG = 'animal/DOG'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'

// 2. 액션 내보내기
export const tiger = () => ({ type: TIGER })
export const dog = () => ({ type: DOG })
export const cat = () => ({ type: CAT })
export const chick = () => ({ type: CHICK })

// 3. 초기값
const initialState = { name : '' , crying : '' }

// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TIGER:
            return { name : '호랑이', crying : '어흥' }
        case DOG:
            return { name : '강아지', crying : '멍멍' }
        case CAT:
            return { name : '고양이', crying : '야옹' }
        case CHICK:
            return { name : '병아리', crying : '삐약' }
        default:
            return state;
    };
}

export default reducer;