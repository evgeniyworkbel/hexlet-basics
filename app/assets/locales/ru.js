/* eslint-disable max-len */
export default {
  translation: {
    help: {
      controls: {
        header: 'Справка',
        body: 'Сбросить прогресс. По этой кнопке можно вернуться в начало упражнения, если что-то сломалось и не чинится. Текущий код не сохранится. Если он вам еще потребуется, скопируйте его перед сбросом — например, в блокнот',
      },
    },
    errors: {
      network: 'Возникла сетевая проблема. Попробуйте повторить ещё раз. Если не получилось, убедитесь, что с интернетом всё в порядке, и отключите блокировщики рекламы',
      server: 'Ошибка на сервере. Возможно, скоро отпустит, а возможно — нет. Попробуйте узнать, что произошло в https://t.me/hexletcommunity/12',
    },
    signInSuggestion: '<a href="/users/new">Создайте аккаунт</a> для сохранения прогресса',
    run: 'Проверить',
    resetCode: 'Сбросить код',
    confirm: 'Вы хотите сбросить прогресс упражнения. Текущая версия кода не сохранится — надеемся, вы уже скопировали его. Продолжаем сброс?',
    editor: 'Редактор',
    output: 'Вывод',
    testForExercise: 'Тесты',
    solution: 'Решение',
    teacherSolution: 'Решение учителя:',
    userCode: 'Ваше решение:',
    userCodeInstructions: 'Когда вы начнёте писать решение в Редакторе, оно появится тут для сравнения с учительским',
    solutionInstructions: 'Решение учителя откроется через:',
    testInstructions: 'Ваше упражнение проверяется по этим тестам',
    solutionNotice: 'Желательно решить задачу самостоятельно, но если вы застряли и долгое время ничего не получается, посмотрите решение учителя. Но обязательно разберитесь в нём и повторите по памяти',
    showSolution: 'Показать решение',
    lesson: 'Урок',
    discuss: 'Обсуждение',
    instructions: 'Инструкции',
    nextLesson: 'Следующий',
    prevLesson: 'Предыдущий',
    loading: 'Загрузка...',
    check: {
      error: {
        message: 'Что-то пошло не так. Попробуйте ещё раз',
        headline: 'Упс!',
      },
      passed: {
        message: 'Ура! Всё получилось! Сравните своё решение с решением учителя и переходите к следующему уроку',
        headline: 'Тесты пройдены',
      },
      failed: {
        message: 'В вашем коде есть ошибки. Прочитайте внимательно вывод тестов, найдите и исправьте их. <a href="http://help.hexlet.io/ru/articles/111500-kak-nayti-oshibki-v-kode" target="_blank">Как искать ошибки в коде</a>. Если самостоятельно учиться сложно, попробуйте <a href="https://premium.hexlet.io/?utm_source=code-basics&utm_medium=referral&utm_campaign=premium" target="_blank">обучение с наставником</a>',
        headline: 'Тесты не прошли',
      },
      'failed-infinity': {
        message: 'Возможно, тесты работали слишком долго или в вашем решении есть бесконечный цикл. Убедитесь, что в цикле верное условие остановки, и вы учитываете пограничные случаи. Если с циклом всё в порядке, попробуйте отправить код на проверку снова через 5 минут',
        headline: 'Долгое выполнение',
      },
    },
  },
};
