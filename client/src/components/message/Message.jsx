import "./message.css"

export default function Message({own}) {
    return (
        <div className= {own ? "message own" :"message" }>
            <div className="messageTop">
                <img className="messageImg" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFsZSxtYWxlfHx8fHx8MTYzNzk0Nzk4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="" />
           <p className="messageText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="messageBottom"> 1 hour ago</div>


        </div>
    )
}
