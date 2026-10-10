---
sidebar_position: 1
---

# Notification records

Open **Alerts → Notification Records** to review notifications and each recipient's result for your tenant.

## Sending records

| Status | Meaning |
|---|---|
| Queued | Saved and waiting to be sent. |
| Accepted | The provider accepted the request; recipient delivery is not confirmed. |
| Delivered / Failed | A trusted provider receipt reported the final result. |
| Accepted without receipt | Accepted, but the channel does not report final delivery. |
| Unknown | The result cannot be confirmed. Do not blindly send again. |

Open a record to inspect the recipient, attempts, time, and error. Email may reach the spam folder; check the actual mailbox as well as the platform result.

## History

Use **History** to inspect retained notification activity. Its success and failure values describe the processing result recorded at the time, not proof of recipient delivery.

Alerts use [notification strategies](./Notification_group.md): a selected strategy takes precedence; otherwise the tenant default applies. Saving or validating a configuration sends nothing. An alert trigger or explicit test-send action creates a sending task.
