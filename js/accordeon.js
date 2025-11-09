// const contents = document.querySelectorAll('.program-line__content');

// contents.forEach((elem) => {
//     const title = elem.querySelector('.program-line__title');
//     const descr = elem.querySelector('.program-line__descr');

//     title.addEventListener('click', () => {
//         descr.classList.toggle('active');
//     })
//     //console.dir(title);
// })

const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        const isActive = descr.classList.contains('active');

        contents.forEach((content) => {
            content.querySelector('.program-line__descr').classList.remove('active');
        });

        if (!isActive) {
            descr.classList.add('active');
        }
    });
})

// github:

/* Система контроля версий Git. Сервис GitHub

git init — инициализация репозитория
Далее - настройка системы Git для отображения изменений
git config — конфигурация локально (указание другого имени, не распространяются на глобальные)
глобально (на весь ПК от нашего имени)  
git config --local user.name "Artem"
git config --local user.email example@gmail.com
git status — статус репозитория (commits - контрольные точки)
git add -A — добавить все файлы (add 'writeFileName' or '*.css' - все .css файлы)
git commit -a -m"first commit" — добавить контрольную точку, message, "..." - краткое содержание, что было сделано на этом commit'е
git log — когда и кем выполнены коммиты
cd - — (change directory) Вернуться назад
cd .. — Выйти на 1 уровень вверх
cd ../.. — Выйти на 2 уровня вверх
cd 'work' — Выйти в папку work
git clone 'URL' 'name folder' — клонирование репозитория на ПК в нужную папку
git pull — обновление старого файла на новый (используется для извлечения и загрузки содержимого из удаленного хранилища и 
немедленного обновления локального хранилища в соответствии с этим содержимым
*/