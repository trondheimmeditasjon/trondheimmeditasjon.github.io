var page_type = document.getElementById("helper").getAttribute("data-name");

redirect(getCookie('status'));

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    redirect(getCookie('status'));
}

function redirect(cvalue)
{
    if (page_type == "accepted-page"){

        if (cvalue == 'rejected'){
            window.location.href = "./textonly/text_only_index.html";
        }
        if (cvalue == ''){
            window.location.href = "choice.html?origin="+window.location.href+'&origin_type='+page_type;
        }
    }

    if (page_type == "declined-page"){

        if (cvalue == 'accepted'){
            window.location.href = "accept.html";
        }
        if (cvalue == ''){
            //window.location.href = "choice.html?origin="+window.location.href+'&origin_type='+page_type;
            window.location.href = "choice.html";
        }
    }
}
