GH pages: https://ajoq.github.io/ra-6-lifecycle-http-6.2-crud

# CRUD

Вам необходимо реализовать базовый CRUD без обновления при работе с HTTP.

[Backend](https://github.com/ajoq/ra-6-lifecycle-http-6.2-crud-backend)

![CRUD](./assets/crud.png)

## Общая механика

Первоначальная загрузка: делается http-запрос GET на адрес http://localhost:7777/notes, полученные данные отображаются в виде карточек с возможностью удаления.

Добавление:

1. Вы заполняете форму и нажимаете кнопку «Добавить».
1. Выполняется http-запрос POST на адрес http://localhost:7777/notes, в теле запроса передаётся следующий JSON:

```json
{
    "id": 0,
    "content": "То, что было введено в поле ввода"
}
```

3. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7777/notes.

Удаление:

1. Вы нажимаете на крестик на одной из карточек.
1. Выполняется http-запрос DELETE на адрес http://localhost:7777/notes/{id}, где id — это идентификатор заметки.
1. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7777/notes.

Обновление:

1. Вы нажимаете на кнопку «Обновить» — две зелёные стрелочки.
1. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7777/notes.
