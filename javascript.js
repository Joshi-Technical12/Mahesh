function validate()
{
    var result=true;
    var e=document.getElementById('email')[0].value;
    var atindex=e.Indexof('@');
    var dotindex=e.lastIndexof('.');
    if(atindex<1||(e.length_dotIndex)<2||(dotindex-atindex<3))
    {
        resultfalse;
        return (result);

    }
}