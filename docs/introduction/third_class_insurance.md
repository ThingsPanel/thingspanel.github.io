---
sidebar_position: 10
---

# MLPS Level 3 Compliance

## Background & Significance

According to the *Cybersecurity Law of the People's Republic of China*, the Multi-Level Protection Scheme (MLPS) is the fundamental system for national cybersecurity assurance. As an IoT management platform, ThingsPanel meets the requirements of MLPS Level 3, ensuring platform security, reliability, and compliance.

## Implementation Approach

Based on *Information Security Technology - Baseline for Classified Protection of Cybersecurity* (GB/T 22239-2019) Level 3 security requirements, we focus on:

a) **User Identification and Authentication**: Ensure unique identity, enforce complexity requirements, and require periodic password updates.

b) **Login Security Control**: Configure login failure handling, session management, and restrictions on illegal logins.

c) **Remote Management Security**: Adopt necessary encryption measures to prevent authentication information from being eavesdropped during network transmission.

## Specific Security Requirements

1. **Account Lockout**: After 5 consecutive failed login attempts, the account is locked for 30 minutes. Login session timeout is set between 300-1800 seconds.

2. **Encryption**: Use state-approved cryptographic technologies to protect important business data and personal information.

3. **Password Complexity**: Passwords must contain at least three character types, filter special characters, be at least 8 characters long, and avoid common weak passwords.

4. **Secure Transmission/Storage**: Passwords must not be transmitted or stored in plaintext.

5. **SQL Injection Protection**: Implement measures to prevent SQL injection attacks.

6. **No Shared Accounts**: Strictly prohibit the use of shared accounts.

7. **Session Cleanup**: User authentication information must be cleared upon logout.

8. **File Upload Restrictions**: Implement file type restrictions on modules with upload functionality.

## Development Measures

### Strong Password Policy

- Minimum Length: 8 characters
- Complexity: At least 3 character types (uppercase letters, lowercase letters, numbers, special characters)

### Login Failure Lockout

- Record failed login attempts
- Set threshold
  - ![Login Lockout Config](./img/1.png)
- Automatically lock account for 30 minutes after exceeding threshold

### Frontend RSA Encryption

- Implement end-to-end encryption protection
  - ![RSA Encryption Toggle](./img/2.png)
- Frontend Key Location
  - `rsa_key` directory
- Backend Key Location
  - ![Private Key](./img/3.png)
- Key Management Recommendations:
  - Periodically rotate key pairs
  - Strengthen private key protection

### Vulnerability Prevention

- CodeQL periodic security scanning
- DeepSource automatic detection on commit
- Focus on vulnerability types:
  - SQL Injection
  - Cross-Site Scripting (XSS)
  - Cross-Site Request Forgery (CSRF)
  - Insecure Deserialization
  - Sensitive Data Exposure

### Logging and Monitoring

- Record critical security events:
  - User authentication operations
  - Sensitive data access
  - System exception information

### Continuous Improvement

- Periodic security assessments and penetration testing
- Timely updates of system components
- Continuous optimization of security policies
- Tracking latest security threats

By implementing these measures, we ensure the platform meets MLPS Level 3 requirements, providing users with secure and reliable services. We will continue to monitor security technology developments to constantly enhance platform security capabilities.
