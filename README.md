## Чтобы встроить виджет
Для встраивания виджета, нужно создать элемент с id
### `glasses-quiz-widget`
и аттрибутом
### `data-source`

```html
//перед закрывающим тегом body
<div id="glasses-quiz-widget" data-source="example.com/"></div>
```
Для встраивания скрипта в проект необходимо прописать
```js
//перед закрывающим тегом body
<script src="https://deadida322.github.io/react-widget/static/js/main.c54a906a.js" defer></script>
```
## Чтобы запустить проект

Необходимо перейти в директорию проекта и прописать:

### `npm start`

Программа запустится
Открыть [http://localhost:3000](http://localhost:3000) чтобы перейти в браузер.



Собрать проект продакшен

### `npm run build`

Приложение будет собрано в /build


