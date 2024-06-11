function Message(props) {
    return (
        <div className="message">
            <h1 className="messageHello">Hello React!</h1>
            <h2>Добро пожаловать, {props.name}, на курс React</h2>
        </div>
    );
}

export default Message;