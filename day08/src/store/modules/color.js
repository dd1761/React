// 1. 액션 생성
const RED = 'color/RED';
const GREEN = 'color/GREEN';
const BLUE = 'color/BLUE';
const TOMATO = 'color/TOMATO';


// 2. 액션 내보내기
export const red = () => ({ type: RED });
export const green = () => ({ type: GREEN });
export const blue = () => ({ type: BLUE });
export const tomato = () => ({ type: TOMATO });

// 3. 초기값 
const initialState = { color : 'hotpink' };

// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = ( state = initialState, action) => { // state: 현재 상태, action: 액션 객체
    switch (action.type) {
        case RED:
            return { color : 'red' };
        case GREEN:
            return { color : 'green' };
        case BLUE:
            return { color : 'blue' };
        case TOMATO:
            return { color : 'tomato' };
        default: // 반드시 default가 들어가야 한다.
            return state;
            
    };
}

export default reducer;