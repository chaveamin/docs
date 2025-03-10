---
title: 'نصب قالب لاگوم'
nextjs:
  metadata:
    title: 'نصب قالب لاگوم'
---

## نیازمندی های قالب

1. IonCube نسخه 13 به بالا
2. PHP نسخه **8.1** به بالا
3. افزونه های مورد نیاز PHP:

- [php-zip](https://www.php.net/manual/en/book.zip.php)

4. نیازمند حداقل `300` برای `max_execution_time`

{% callout type="error" title="نکته مهم" %}
با شروع نسخه `2.3.0`، قالب لاگوم از PHP زیر 8.1 پشتیبانی نمیکند.
{% /callout %}

{% callout type="note" title="نکته" %}
به شدت توصیه می‌شود که در طول نصب یا به‌روزرسانی این محصول، «تایم اوت سرور» (max_execution_time) را حداقل تا **300 ثانیه** افزایش دهید. پس از اتمام مراحل نصب یا ارتقا، می توانید تایم اوت سرور را به مقدار پیش فرض بازنشانی کنید.

در طول فعال سازی اولیه محصول، افزونه تمام دیتابیس های لازم را ایجاد می کند و پیکربندی مورد نیاز را بارگذاری می کند. اگر این فرآیند به دلیل کم بودن تایم اوت سرور (max_execution_time) قطع شود، ممکن است افزونه به درستی کار نکند یا اصلا کار نکند. این می تواند منجر به از دست رفتن ویژگی ها یا خطاهای مربوط به پایگاه داده در صفحات WHMCS شما شود.

اگر سرور فعال سازی افزونه را قطع کرد، ممکن است لازم باشد افزونه قالب را با استفاده از گزینه "Clear Database Records" غیرفعال کنید و سپس دوباره آن را فعال کنید. با این حال، اکیداً توصیه می شود قبل از انجام این عمل، تنظیمات (max_execution_time) را افزایش دهید.
{% /callout %}

## قبل از اینکه شروع کنید

1. **مهم** - حالت [Maintenance Mode](https://help.whmcs.com/m/system/l/680991-using-maintenance-mode-to-prevent-customer-access) را فعال کنید و یک بکاپ کامل از سرور و دیتابیس خود بگیرید.
2. **مهم** - مطمئن شوید که نسخه **قالبی که میخواهید نصب کنید**، با **نسخه WHMCS** شما سازگار است.

## دانلود فایل ها

1. وارد [حساب کاربری](https://designesia.ir/login) خود در سایت شوید
2. به بخش دانلود ها بروید و محصول خود را دانلود کنید.

## آپلود فایل ها

{% callout type="note" %}
فایل‌های لاگوم را نمی‌توان توسط کاربر روت آپلود کرد، زیرا قالب، فایل‌ها و پوشه‌های آپلود شده توسط کاربر روت را نمی‌تواند رونویسی کند. این باعث ایجاد مشکلاتی در هنگام فعال‌سازی طرح‌های رنگی لاگوم می‌شود.
{% /callout %}

1. فایل زیپی را که از پنل کاربری دانلود کردید در مسیر WHMCS اکسترکت کنید
2. هنگامی که فایل زیپ قالب به درستی در هاست WHMCS شما آپلود شد، لطفاً بررسی کنید که آیا فایل ها و پوشه های واقع در مسیر `/templates/lagom2/core/styles/` دارای مجوز نوشتن(write) هستند یا خیر.

## فعالسازی افزونه

وارد قسمت مدیریت WHMCS در سرور خود شوید.
در گوشه سمت راست بالا، روی "System Settings" کلیک کنید و سپس "Addon Modules" را انتخاب کنید.

![فعالسازی قالب](/lagom/installation-activate_addon_1.png)

افزونه “RS Themes” را فعال کنید.

![فعالسازی قالب](/lagom/installation-activate_addon_2.png)

دکمه «پیکربندی» را فشار دهید و همه تیک ها را فعال کنید، سپس تغییرات را ذخیره کنید.

![فعالسازی قالب](/lagom/installation-activate_addon_3.png)

## فعالسازی و نصب قالب

به «Addons» بروید، سپس روی «RS Themes» در منوی ناحیه مدیریت خود کلیک کنید.

![فعالسازی قالب](/lagom/installation-activate_theme_1.png)

روی دکمه "Manage" واقع در کنار محصول نصب شده کلیک کنید.

![فعالسازی قالب](/lagom/installation-activate_theme_2.png)

پنجره نصب ظاهر می شود. روی دکمه "Start Installation" کلیک کنید، دستورالعمل های روی صفحه را دنبال کنید و منتظر بمانید تا نصب کامل شود.

![فعالسازی قالب](/lagom/installation-activate_theme_3.png)

نصب، مراحل زیر را طی خواهد کرد:

- Starting Installation
- Checking Module Requirements
- Installing Theme Core
- Installing Addon Core
- Building Color Styles
- Creating Default Pages
- Building Product Pricing Cache
- Polishing
- Finalizing Installation

در طول مراحل نصب، ممکن است خطاها یا هشدارهای مختلفی ظاهر شود. در زیر یک نمونه پیام وجود دارد و لیست کامل آنها را می توانید در بخش [مشکلات رایج](/docs/lagom/common-problems) مشاهده کنید.

![فعالسازی قالب](/lagom/installation-activate_theme_4.png)

پس از اتمام نصب، به طور خودکار به صفحه انتخاب قالب هدایت می شوید.

![فعالسازی قالب](/lagom/installation-activate_client_area_theme-3.png)

روی دکمه "Manage" واقع در کنار محصول نصب شده کلیک کنید.

![فعالسازی قالب](/lagom/installation-activate_theme_2.png)

کد لایسنس را در فیلد پایین وارد کنید. `0SA26499XP995250E`

![فعالسازی قالب](/lagom/installation-activate_theme_3_2.png)

برای فعالسازی قالب و فرم سفارش روی **Activate Theme** کلیک کنید

![فعالسازی قالب](/lagom/installation-activate_theme_4_2.png)

## افزودن فونت فارسی

4 فونت فارسی(دانا، ایران سنس، ایران یکان، یکان بخ) در قالب موجود است. برای فعالسازی آنها به پنل قالب لاگوم و تب Styles بروید. استایل مورد نظر خود را انتخاب و روی Manage کلیک کنید.

![فعالسازی قالب](/lagom/font-farsi-1.png)

به تب Custom Css بروید و کد زیر را قرار دهید

```css
@font-face {
  font-family: 'yekanbakh';
  src: url('../../../../../../../../templates/lagom2/assets/fonts/fa/YekanBakhFaNum-VF.woff2');
}
```

![فعالسازی قالب](/lagom/font-farsi-2.png)

سپس در همان مسیر به تب Style Variables/Typography بروید، تیک Use Custom Font Face را فعال و مقدار آن را yekanbakh قرار دهید.

![فعالسازی قالب](/lagom/font-farsi-3.png)

در نهایت تغییرات را ذخیره کنید

## پاکسازی کش

1. کش مرورگر خود را پاک کن کنید
2. کش قالب WHMCS را در این مسیر پاک کنید:\
   Utilities > System > System Cleanup > Go > Empty Template Cache

# از قالب لاگوم لذت ببرید
