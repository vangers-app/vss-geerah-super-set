# Супер сет модов от Гири

Этот репозиторий используется для сборки мод менеджера [mini-vaneger](https://github.com/vangers-app/vss/releases).

Последний релиз модов можно найти в разделе [Релизы](https://github.com/vangers-app/vss-geerah-super-set/releases)

## Сборка

1. Установите node.js
2. Установите yarn (`npm install -g yarn`)
3. Установите зависимости (`yarn`)
4. **Распакуйте последний релиз в папку `scripts`**
5. Запустите компиляцию `yarn run tsc --watch`
6. Скопируйте `mini-vaneger` и `vss.exe` в корневую директорию
7. Проверяйте свой плагин используя `mini-vaneger`

**ВАЖНО:** Если вы разарабатываете [vss](https://github.com/vangers-app/vss), тогда достаточно запустить его с флагом ```./vangers -vss <path-to-scripts>```

## Публикация

1. Подготовьте PR
2. Подготовьте новый релиз для публикации
