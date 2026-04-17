import { AuthForm } from "../../components/auth/auth-form";
import { AuthShell } from "../../components/auth/auth-shell";

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue managing your applications and career workflow."
    >
      <AuthForm mode="sign-in" />
    </AuthShell>
  );
}
