import { Suspense } from 'react';

export default function App() {
	return (
		<div>
			<Suspense fallback={null}>
				<Routes>
					<Route path="/welcome" element={<WelcomePage />} />
					<Route path="auth/:id" element={<AuthPage />}>
						<Route path="register" element={<RegisterForm />} />
						<Route path="login" element={<LoginForm />} />
					</Route>
					<Route path="/home" element={<HomePage />} />
					<Route path="/home/:boardName" element={<EventPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</div>
	);
}
