type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You have {props.messageCount} unread messages
        </h2>
      ) : (
        "Welcome guest"
      )}
    </div>
  );
};
export default Greet;