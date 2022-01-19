import React from 'react'

const UserCard = (props) => {
    const { children } = props;
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Hi Sea </div>
                <div className='description'>
                    {/* Hello my name is Sea, Im a live  in VietNam. */}
                    {children}
                </div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
                Add friend
            </div>
        </div>
    )
}
export default UserCard;