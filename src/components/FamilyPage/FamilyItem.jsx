import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//  function that handles the removal of child account from db
function FamilyItem({ child }) {

    const userId = useSelector((store) => store.user.id);
    const dispatch = useDispatch();

    const removeChild = () => {
        console.log(`This button will remove ${child.username} with ID: ${child.id}.`);
        const childIdToRemove = child.id;
        dispatch({
            type: 'REMOVE_CHILD',
            payload: {childIdToRemove, userId}
        });
    }

    return (
        <>
            <td>{child.username}</td>
            <td>
                <button onClick={removeChild}>Remove</button>
            </td>
        </>
    )
}

export default FamilyItem;