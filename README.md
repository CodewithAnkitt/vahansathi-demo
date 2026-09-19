# Vahansathi Demo — Final Access Model

## Company Owner
Full unrestricted access:
- Add/edit/manage vehicles
- Add/edit/manage owners
- Add/edit/manage routes
- Add/edit trips
- View/manage all earnings
- Configure diesel rate and fixed charges
- View/approve/reject withdrawals
- Manage payments, expenses, users and settings
- Open Vehicle Owner Portal in view-only mode

## Vehicle Owner
Only these are editable/actionable:
1. Add vehicle
2. Submit/update bank details
3. Request withdrawal
4. Complete/edit own profile

Everything else is view-only.

## Company Owner viewing Vehicle Owner
The Company Owner can open the complete Vehicle Owner browser, but that browser is explicitly VIEW ONLY. Owner actions are disabled.

This is a static prototype. The real Django application should enforce the same rules server-side with permissions; hiding buttons in JavaScript is not security.
