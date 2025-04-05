---
title: 'لیست تغییرات'
nextjs:
  metadata:
    title: 'لیست تغییرات'
---

{% changelog version="2.3.2" date="2025-01-17" compatibility="WHMCS 8.12.0 - 8.12.1" %}

###### ناحیه کاربری

{% label type="new" %}{% /label %} Compatibility with the WHMCS 8.12.0 and 8.12.1.

{% label type="fix" %}{% /label %} Resolved an issue with adding new payment method on the "Payment Methods" page.

{% label type="fix" %}{% /label %} Fixed the "Renew" function available in the dropdown menu on the "My Domains" page, while using the "Enable Dynamic AJAX Loading for Data Tables" feature

{% label type="fix" %}{% /label %} Other minor appearance fixes.

###### فرم سفارش

{% label type="new" %}{% /label %} Compatibility with the WHMCS 8.12.0 and 8.12.1.

{% label type="fix" %}{% /label %} Resolved an issue with the display of the "Continue" button bar appearing after adding a domain on the "Domain Registration" page using the "Default" page template

{% label type="fix" %}{% /label %} Other minor appearance fixes.

{% /changelog %}

{% changelog version="2.3.3" date="2025-01-17" compatibility="WHMCS 8.12.0 - 8.12.1" %}

###### ناحیه کاربری

{% label type="new" %}{% /label %} Default Status Filter - Added an option to select the default status filter on the "My Products & Services" page.

{% label type="improvement" %}{% /label %} Enhanced the installation/update wizard with improved error detection and detailed compatibility checks, allowing users to immediately see the cause of any issues during the process.

{% label type="fix" %}{% /label %} Fixed the "Renew" function available in the dropdown menu on the "My Domains" page, while using the "Enable Dynamic AJAX Loading for Data Tables" feature

{% label type="fix" %}{% /label %} Fixed an issue where status icons from the "Show Status Icon" feature were not displayed correctly on the "My Quotes" table when the "Enable Dynamic AJAX Loading for Data Tables" option is enabled.

{% label type="fix" %}{% /label %} Fixed an issue on the "Quotes" table, where the "Draft" status was unnecessarily displayed while "Enable Dynamic AJAX Loading for Data Tables" is enabled and improved dynamic AJAX filtering in the "Quotes" table.

{% label type="fix" %}{% /label %} Resolved an issue where the "Auto Renew" column in the "My Domains" table was not sorting correctly when both "Show Auto Renew Switcher" and "Enable Dynamic AJAX Loading for Data Tables" settings were enabled.

{% label type="fix" %}{% /label %} Fixed the selection of payment gateways on the "View Invoice" page for gateways using non-Latin characters.

{% label type="fix" %}{% /label %} Fixed an issue where the product bundle description was not displaying correctly when the "Custom Description Formatting" option was enabled.

{% label type="fix" %}{% /label %} General improvements in Dark Mode style.

{% label type="fix" %}{% /label %} Other minor appearance fixes.

###### فرم سفارش

{% label type="fix" %}{% /label %} Resolved an issue where the "Custom Language List" feature was not working on order process pages.

{% label type="fix" %}{% /label %} Other minor appearance fixes.

{% /changelog %}
