(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1","Align center":"Выравнивание по центру","Align left":"Выравнивание по левому краю","Align right":"Выравнивание по правому краю",Big:"Крупный","Blue marker":"Выделение синим маркером",Bold:"Жирный","Bulleted List":"Маркированный список",Cancel:"Отмена","Centered image":"Выравнивание по центру","Change image text alternative":"Редактировать альтернативный текст",Default:"По умолчанию","Dropdown toolbar":"Выпадающая панель инструментов","Editor toolbar":"Панель инструментов редактора","Font Size":"Размер шрифта","Full size image":"Оригинальный размер изображения","Green marker":"Выделение зелёным маркером","Green pen":"Зеленый цвет текста",Highlight:"Выделить",Huge:"Очень крупный","Image toolbar":"Панель инструментов изображения","image widget":"Виджет изображений","Insert image":"Вставить изображение",Justify:"Выравнивание по ширине","Left aligned image":"Выравнивание по левому краю",Next:"Следующий","Numbered List":"Нумерованный список","Pink marker":"Выделение розовым маркером",Previous:"Предыдущий","Red pen":"Красный цвет текста",Redo:"Повторить","Remove highlight":"Убрать выделение","Rich Text Editor":"Редактор","Rich Text Editor, %0":"Редактор, %0","Right aligned image":"Выравнивание по правому краю",Save:"Сохранить","Show more items":"Другие инструменты","Side image":"Боковое изображение",Small:"Мелкий","Text alignment":"Выравнивание текста","Text alignment toolbar":"Выравнивание","Text alternative":"Альтернативный текст","Text highlight toolbar":"Панель инструментов выделения текста",Tiny:"Очень мелкий",Undo:"Отменить","Upload failed":"Загрузка не выполнена","Upload in progress":"Идёт загрузка","Widget toolbar":"Панель инструментов виджета","Yellow marker":"Выделение жёлтым маркером"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));