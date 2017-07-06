$(document).ready(function(){
    var content = $('div.class_content');
    var defaultSize = content.css('fontSize');

    $('#switcher button').click(function(){
        var num = parseFloat(content.css('fontSize'));
        
        switch(this.id){
            case 'switcher-narrow':
                num = num / 1.4;
                break;

            case 'switcher-large':
                num = num * 1.4;
                break;

            default:
                num = parseFloat(defaultSize);
        }

        content.css('fontSize', num + 'px');
    });

    $('.basic_conversation_index').click(function(){
        $(this).parent().find('.basic_conversation_content').toggle(800);
    });
});