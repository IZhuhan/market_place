**FOXTAR Market Place**
================
**Используемые технологии**
--------------------------
1. Сборщик проектов Gulp.js
2. Библиотека jQuery


**Используемые плагины**
------------------------
1. slick-slider - для стилизации карусели
2. form-stayler - для стилизации элементов форм
3. price-range - для стилизации фильтра цены
4. datepicker - для стилизации календаря
5. bpopup - для модального окна
6. slick-nav - для стилизации мобильного меню

**Используемые шрифты и иконки**
--------------------------------
1. Google fonts:
    * Roboto: 400, 500, 700
    * Open Sans: 400, 600, 800
    * Raleway: 400, 700
    * Lato: 400, 500, 700
2. Font Awesome


**Стандартные классы и компоненты**
-----------------------------------
### ***Классы***
1. Установка стандартных отступов между блоками:
     ```
     .default-section
     .default-section.big
     ```
2. Установка фона:
     ```
     .bg-gray
     .bg-dark
     .bg-green
     .bg-white
     .bg-red
     ```
3. Установка цвета текста
     ```
     .text-red
     .text-blue
     .text-blue.light
     .text-black
     .text-white
     .text-green
     .text-gray
     .text-orange.light
     .text-orange
     ```
4. Создание флекс-контейнера
     ```
     .d-flex
     ```
5. Выравнивание элементов по горизонтали и вертикали:
     ```
     .justify-content-start
     .justify-content-end
     .justify-content-center
     .justify-content-between
     .justify-content-around
     .align-items-start
     .align-items-end
     .align-items-center
     .align-items-baseline
     .align-items-stretch
     ```
### ***Компоненты***
1. Стилизация заголовков:
     ```
     .title
     .title.center
     .title.semibold
     .title.regular
     .title.lg
     .title.md
     .title.s
     .title.main-section
     .title.product-page
     .title.footer-title
     .title.card-xs
     .title.card-theme-xs
     ``` 
2. Стилизация дефолтной текстовой информации:
     ```
     .text-section
     .default-text
     ```
4. Стилизация кнопок:
     ```
     .btn
     .btn-default
     .btn.btn-primary
     .btn.btn-success
     .btn.btn-danger
     .btn.btn-warning
     .btn.btn-info
     .btn.btn-basic
     .btn.btn-dark
     .btn.btn-lg
     .btn.btn-md
     .btn.btn-sm
     .btn.btn-xs
     .btn.btn-link
     .btn.btn-block
     .btn.btn-shadow
     .btn-shadow-light
     .btn.btn-round
     .btn.btn-icon
     .btn.btn-social
     .btn-social-mini
     .btn.btn-facebook
     .btn.btn-twitter
     .btn.btn-linkedin
     .btn.btn-pinterest
     .btn.btn-youtube
     .btn.btn-authorization
     ```
6.  Стилизация дефолтных элементов форм:
     ```
     .form-group
     .form-control
     .file-upload
     .jq-selectbox
     ```
8. Стилизация карточек товаров
     ```
     .card
     .card.large-card
     .card.medium-card
     .card.row-card
     .card.asie-card
     ```

**Медиа-запросы**
-----------------

|Медиа-запросы| Разрешение устройства        |
|:------------|:-----------------------------|
|1199px       | 992px - 1199px               |
|991px        | 768px - 991px                |
|767px        | 600px - 767px                |
|599px        | 480px - 599px                |
|479px        | 479px и меньше               |

**Структура папок**
-------------------

|Название папок |	Содержание                                                                   |
|:--------------|:-------------------------------------------------------------------------------|
|app            |	Директория с готовым проектом                                                |
|app/css        |	Директория со стилями готовыми к продакшну                                   |
|app/js         |	Директория с js готовым к продакшну                                          |
|app/img        |	Минифицированные изображения готовые к продакшну                             |
|app/fonts      |	Шрифты                                                                       |
|src            |	Директория с исходными файлыми                                               |
|src/css        |	Исходные стили, которые будут сконвертированы в app/css                      |
|src/img        |	Исходные изображения, которые будут минифицироваться и храниться в app/img   |
|src/js         |	Исходный js, который будет минифицироваться и храниться в app/js             |
|src/sprite     |	Изображения под будущие спрайты, после конвертации будут храниться в app/img |

**Таски для Gulp**
-------------------
  * Добавление вендорных префиксов в css
  * Оптимизация изображений
  * Создание спрайтов
  * Минификация css файлов