import React from "react";


const SingleComment = (props) => {
    const { name, date, text, profile1 } = props;
    return (
        <div className='ui comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img src={profile1} alt='profile picture' />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        {name}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {date}
                        </span>
                    </div>
                    <div className='text'>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleComment;