(function(d){	const l = d['cs'] = d['cs'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Align center":"Zarovnat na střed","Align left":"Zarovnat vlevo","Align right":"Zarovnat vpravo",Big:"Velké","Blue marker":"Modrý fix",Bold:"Tučné","Bulleted List":"Odrážky",Cancel:"Zrušit","Centered image":"Obrázek zarovnaný na střed","Change image text alternative":"Změnit alternativní text obrázku",Default:"Výchozí","Dropdown toolbar":"Rozbalovací panel nástrojů","Editor toolbar":"Panel nástrojů editoru","Font Size":"Velikost písma","Full size image":"Obrázek v plné velikosti","Green marker":"Zelený fix","Green pen":"Zelené pero",Highlight:"Zvýraznění",Huge:"Obrovské","Image toolbar":"Panel nástrojů obrázku","image widget":"ovládací prvek obrázku","Insert image":"Vložit obrázek",Justify:"Zarovnat do bloku","Left aligned image":"Obrázek zarovnaný vlevo",Next:"Další","Numbered List":"Číslování","Pink marker":"Růžový fix",Previous:"Předchozí","Red pen":"Červený fix",Redo:"Znovu","Remove highlight":"Odstranit zvýraznění","Rich Text Editor":"Textový editor","Rich Text Editor, %0":"Textový editor, %0","Right aligned image":"Obrázek zarovnaný vpravo",Save:"Uložit","Show more items":"Zobrazit další položky","Side image":"Postranní obrázek",Small:"Malé","Text alignment":"Zarovnání textu","Text alignment toolbar":"Panel nástrojů zarovnání textu","Text alternative":"Alternativní text","Text highlight toolbar":"Panel nástrojů zvýraznění textu",Tiny:"Drobné",Undo:"Zpět","Upload failed":"Nahrání selhalo","Upload in progress":"Probíhá nahrávání","Widget toolbar":"Panel nástrojů ovládacího prvku","Yellow marker":"Žlutý fix"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));