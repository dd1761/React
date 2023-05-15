import React from 'react';
import { useParams } from 'react-router-dom';

const MemberDetail = () => {
    const { memberId } = useParams()

    const css = {
        border: '1px solid cyan', margin: 20, padding: 20
    }
    return (
        <div>
            
        </div>
    );
};

export default MemberDetail;