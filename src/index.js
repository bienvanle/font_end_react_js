import React from 'react'
import ReactDOM from 'react-dom'
import profile2 from './image/a1-1.jpg'
import profile3 from './image/a2.jpg'
import profile4 from './image/a3.jpg'
import SingleComment from './SingleComment'
import UserCard from './UserCard'
export default function App() {
    return (
        <div className='ui comments' style={{ padding: 20 }}>
            <UserCard>
                <SingleComment name='Sea' date='Today at 5:00PM' text="it's amazing" profile1={profile2} />
            </UserCard >
            <UserCard>
                <SingleComment name='Ocean' date='Today at 6:00PM' text="wonderful" profile1={profile3} />
            </UserCard>
            <UserCard>
                <SingleComment name='Black' date='Today at 7:00PM' text="succes" profile1={profile4} />
            </UserCard>
        </div>

    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
