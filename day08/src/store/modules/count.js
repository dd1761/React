// 1. 액션 생성 - 모듈이름을 앞에 붙여줌으로써 액션 이름의 중복을 방지
const INCREMEMT = 'count/INCREMEMT'
const DECREMEMT = 'count/DECREMEMT'
const RESET = 'count/RESET'

// 2. 액션 내보내기
export const increment = () => ({ type: INCREMEMT })
export const decrement = () => ({ type: DECREMEMT })
export const reset = () => ({ type: RESET })

// 3. 초기값
const initialState = { count : 0 }

// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMEMT:
            return { count : state.count + 1 }
        case DECREMEMT:
            return { count : state.count - 1 }
        case RESET:
            return { count : 0 }
        default:
            return state;
    };
}

export default reducer;