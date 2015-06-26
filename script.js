
function mozzapAlert(text,classApply)
{
    if(classApply == undefined || classApply == "" )
    {
        classApply = "modalDanger";
    }


    if(!$('body').hasClass('modal-open'))
    {
        if($('#mozzapAlert').hasClass('modalInfo'))
        {
            $('#mozzapAlert').removeClass('modalInfo');
        }

        if($('#mozzapAlert').hasClass('modalDanger'))
        {
            $('#mozzapAlert').removeClass('modalDanger');
        }

        if($('#mozzapAlert').hasClass('modalSuccess'))
        {
            $('#mozzapAlert').removeClass('modalSuccess');
        }

        if($('#mozzapAlert').hasClass('modalPrimary'))
        {
            $('#mozzapAlert').removeClass('modalPrimary');
        }

        if($('#mozzapAlert').hasClass('modalWarning'))
        {
            $('#mozzapAlert').removeClass('modalWarning');
        }



        if(classApply != "")
        {
            $('#mozzapAlert').addClass(classApply);
        }


        $('#mozzapAlertText').html(text);
        $('#mozzapAlert').modal('show');
    }
}
