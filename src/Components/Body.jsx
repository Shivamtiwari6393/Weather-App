import "../Styles/Body.css";

export default function Body(props) {
  let { weatherdata } = props;
  return (
   <div className="body">
    <div>
        {weatherdata?weatherdata["resolvedAddress"]: "Loading..."}
    </div>
   </div>
  );
}
