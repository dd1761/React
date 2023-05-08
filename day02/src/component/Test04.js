import React, {useState} from 'react';

const Test04 = () => {
    const [visible, setVisible] = useState(true)

    const onShow = () => {
        setVisible(true)
    }

    const onHide = () => {
        setVisible(false)
    }

    const onToggle = () => {
        //visible ? onHide(false) : onShow(true)
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={ onShow }>보이기</button>
            <button onClick={ onHide }>숨기기</button>
            <button onClick={ onToggle }>{visible ? '숨기기' : '보이기'}</button>
            <hr />
            {
                
                //visible && <div style={{ width: 300, height: 300, margin: 20, background: 'hotpink' }}></div> //조건이 맞았을 때만 보여줌
                visible ? <div style={{ width: 300, height: 300, margin: 20, background: 'hotpink' }}></div> : null
                
            }

        </div>
    );
};

export default Test04;