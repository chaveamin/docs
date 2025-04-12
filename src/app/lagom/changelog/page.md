---
title: 'لیست تغییرات'
nextjs:
  metadata:
    title: 'لیست تغییرات'
---

{% changelog version="2.3.4" date="2025-03-17" compatibility="WHMCS 8.12.0 - 8.12.1" %}

###### ناحیه کاربری

{% label type="remove" %}{% /label %} Support for IonCube Loader 13 has been discontinued. The product now requires IonCube Loader 14 or later.

{% label type="new" %}{% /label %} [Footer Payment Gateways](/lagom/settings#drgah-hay-prdakht-dr-fwtr) - Added a new feature to include icons of supported payment gateways in the footer at a location of our choice.

{% label type="new" %}{% /label %} [ Footer Company Description](/lagom/settings#twdyhat-shrkt-dr-fwtr) - New setting to easily manage company description in the footer with an additional option for easy translation.

{% label type="new" %}{% /label %} [Hide Ticket Priority](#) - New setting for the View Ticket page allowing you to hide ticket priority display.

{% label type="new" %}{% /label %} [Save Label Placement](#) - New setting for the "Configure Product" page, that lets you to choose the "Save x%" label placement within the "Choose Billing Cycle" section.

{% label type="new" %}{% /label %} [Main Menu Hover-Triggered Submenu Expansion](/lagom/settings#baz-krdn-khwdkar-mnwha-hngam-hawr) - Introduced a feature enabling automatic dropdown expansion on hover in menus, enhancing user navigation.

{% label type="new" %}{% /label %} [Choose Default Mode](/lagom/settings#antkhab-halt-pyshfrd) - New option for the Enable Dark Mode feature that allows you to select the default page mode, Light or Dark .

{% label type="new" %}{% /label %} [Enable Account Details Box Display Location](/lagom/settings#fealsazy-mkan-nmaysh-jebh-jzyyat-hsab) - New setting that lets you choose on which pages the Account Details Box will be displayed within the Account Management and User Management sections fo the Client Area.

{% label type="fix" %}{% /label %} Updated banner graphics on the ["Domain Search"](#) page to better reflect the domain searching theme.

{% label type="fix" %}{% /label %} Other minor appearance fixes.

###### فرم سفارش

{% label type="new" %}{% /label %} [Show Promo Code Banner Label](/lagom/settings#nmaysh-lybl-kd-tkhfyf) - New setting that allows adding a label with promotion code information on the order process pages - Domain Search, Domain Configuration, Product Configuration, and Checkout

{% label type="improvement" %}{% /label %} Updated the appearance of payment gateway icons in Dark Mode.

{% label type="fix" %}{% /label %} Fixed an issue where the currency and language switchers in the Secondary Menu were not working correctly when using the Lagom One Step Order Form For WHMCS module.

{% label type="fix" %}{% /label %} Other minor appearance fixes.

###### افزونه

{% label type="new" %}{% /label %} Introduced quick access links within our addon. Hovering over the addon menu i WHMCS Admin Area now displays a dropdown menu with direct links to frequently accessed areas, improving navigation and user experience. **Feature available exclusively for the "Blend" WHMCS templat.**

{% label type="new" %}{% /label %} Added a notification section to our addon. Clicking on the notification icon now reveals a list of dismissed notifications, helping users manage and review past alerts more efficiently.

{% label type="improvement" %}{% /label %} Further minor security imporvements.

{% label type="fix" %}{% /label %} Resolved an issue where licenses deactivated after 30 days of activation problems led to unnecessary redirects on the deactivation page while using Lagom WHMCS Website Builder.

{% label type="fix" %}{% /label %} Fixed an issue where the Custom CSS section in the Style Manager was not loading properly on specific server configurations.

{% /changelog %}

{% changelog version="2.3.3" date="2025-02-17" compatibility="WHMCS 8.12.0 - 8.12.1" %}

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
