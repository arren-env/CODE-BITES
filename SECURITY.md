# Security Policy

## Supported Versions

We take security seriously in CODE BITES. The following versions are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in CODE BITES, please help us protect our users by following responsible disclosure practices.

### How to Report

1. **Do NOT create a public GitHub issue** for security vulnerabilities
2. Email us directly at: **bhaveshuni2309@gmail.com** (or your preferred contact email)
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Suggested fix (if available)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your report within 48 hours
- **Initial Assessment**: We will provide an initial assessment within 5 business days
- **Regular Updates**: You will receive updates on our progress every 7 days
- **Resolution Timeline**: We aim to resolve critical vulnerabilities within 30 days

### Response Process

1. **Triage**: We will assess the severity and impact of the reported vulnerability
2. **Investigation**: Our team will investigate and reproduce the issue
3. **Fix Development**: We will develop and test a fix
4. **Disclosure**: We will coordinate with you on the disclosure timeline
5. **Release**: We will release the security patch and publish a security advisory

## Security Best Practices

### For Contributors

- Always use parameterized queries to prevent SQL/NoSQL injection
- Implement proper input validation and sanitization
- Use secure authentication and session management
- Follow the principle of least privilege
- Keep dependencies up to date
- Never commit sensitive information (passwords, API keys, etc.)

### For Users

- Use strong, unique passwords for your account
- Enable two-factor authentication when available
- Keep your browser and dependencies updated
- Be cautious when clicking links in blog posts
- Report suspicious activity immediately

## Known Security Considerations

- **JWT Token Management**: Ensure proper storage and handling of JWT tokens
- **File Upload Security**: Validate file types and sizes for blog images
- **Input Validation**: All user inputs are validated both client and server-side
- **CORS Configuration**: Properly configured for production environments
- **Environment Variables**: Sensitive configuration stored securely

## Security Features

- **Password Hashing**: Using bcrypt with appropriate salt rounds
- **JWT Authentication**: Secure token-based authentication with refresh tokens
- **Input Validation**: Comprehensive validation using Joi schemas
- **Error Handling**: Secure error messages that don't leak sensitive information
- **File Upload Security**: Restricted file types and sizes for uploads

## Contact

For security-related questions or concerns:
- **Security Email**: security@codebites.dev
- **General Contact**: team@codebites.dev

## Hall of Fame

We recognize and thank the following security researchers who have helped improve CODE BITES security:

*(No entries yet - be the first!)*

---

Thank you for helping keep CODE BITES and our users safe!