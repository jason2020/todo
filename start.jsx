const name = "brandon";
const element = <h1>Hello {formatName(name)}</h1>;

ReactDOM.render(element, document.getElementById("root"));

function formatName(user) {
	return user.firstName + " " + user.lastName
}

const user = {
	firstName: "Brandon",
	lastName: "Y"
}