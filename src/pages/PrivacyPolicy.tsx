import React from "react";

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> February 2026</p>

      <p>
        OpenCivil respects your privacy. This Privacy Policy explains how we
        collect, use, store, and protect your information when you use our
        website and services.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a) Information You Provide</h3>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Password (stored only in hashed/encrypted form)</li>
      </ul>

      <h3>b) Google Login Information</h3>
      <p>
        If you sign in using Google, we may receive your email address, name,
        profile picture, and a Google-provided unique identifier used only for
        authentication. We never access your Google password.
      </p>

      <h3>c) Technical Information</h3>
      <ul>
        <li>Login timestamps</li>
        <li>Authentication provider (email or Google)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to create and manage accounts, authenticate
        users, send verification and password reset emails, maintain security,
        and improve platform reliability.
      </p>

      <p>
        We do <strong>not</strong> sell, rent, or trade your personal data.
      </p>

      <h2>3. Cookies and Tracking</h2>
      <p>
        OpenCivil uses only essential cookies or local storage required for
        authentication and session management. We do not use advertising or
        marketing trackers.
      </p>

      <h2>4. Data Storage and Security</h2>
      <p>
        User data is stored securely using MongoDB. Passwords are hashed using
        industry-standard encryption. Verification and reset codes are temporary
        and expire automatically.
      </p>

      <h2>5. Email Communications</h2>
      <p>
        We send emails only for account verification, password resets, and
        security-related notifications. We do not send marketing emails.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not share your personal data with third parties except when
        required by law or when necessary for authentication services such as
        Google Login.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Request corrections</li>
        <li>Request deletion of your account</li>
      </ul>

      <p>
        To request account deletion, contact us at{" "}
        <strong>ahmed.azad@metu.edu.tr</strong>.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        OpenCivil is not intended for children under the age of 13. We do not
        knowingly collect data from children.
      </p>

      <h2>9. International Users</h2>
      <p>
        Your data may be processed on servers located outside your country. By
        using the service, you consent to this processing.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated revision date.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        Email: <strong>ahmed.azad@metu.edu.tr</strong>
        <br />
        Project: OpenCivil
        <br />
        Country: Türkiye
      </p>
    </main>
  );
}