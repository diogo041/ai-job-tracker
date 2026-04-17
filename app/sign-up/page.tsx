import { AuthForm } from "../../components/auth/auth-form";
import { AuthShell } from "../../components/auth/auth-shell";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Start tracking applications, resumes, and interviews in one place."
    >
      <AuthForm mode="sign-up" />
    </AuthShell>
  );
}
