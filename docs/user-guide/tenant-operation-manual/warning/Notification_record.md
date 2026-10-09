---
sidebar_position: 1
---

# Notification records

Open **Alerts → Notification Records** to review notification activity for your tenant. The page separates **New Deliveries** from **Legacy History**; the two record sets have different status meanings and are not merged into one result list.

## New deliveries

New records show the notification request and its per-target delivery state. Depending on the provider, the status may be queued, accepted, failed, unknown, or updated by a delivery receipt.

- **Accepted** means the provider accepted the submission. It does not prove that the recipient received or read the message.
- **Delivered** or **Failed** should be shown only when supported by a trusted provider receipt.
- **Accepted without receipt** means the provider accepted the request but does not report delivery for that channel.
- **Unknown** means the result cannot be confirmed. Do not blindly submit another notification.

## Legacy history

Legacy records remain available in a separate section. Their original `SUCCESS` and `FAILURE` values describe the legacy system's recorded state and must not be interpreted as proof of recipient delivery.

For a new notification, configure a [notification strategy](./Notification_group.md) and select it in the relevant alert rule. Saving or validating a strategy does not create a delivery record or send a message; an explicit test-send action does.
