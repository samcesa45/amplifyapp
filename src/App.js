import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
	return (
		<div className="App">
			<header>
				<AmplifySignOut />
			</header>
			<h1>Hello from v2</h1>
		</div>
	);
}

export default withAuthenticator(App);
