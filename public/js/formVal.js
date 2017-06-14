/**
 * Created by artem on 15.06.17.
 */

window.onload = () => {
    function get(id) {
        // it's ridiculous but i still dunno how to handle getElementsByClassName (except ordinary things)
        // so I use here and there id despite of BEM methodology
        return document.getElementById(id);
    }

    let btn = get('button-value'), res = get('validation-result'), f = get('main-field_radio_first-item');

    function main() {
        let params = ['main-field_inputs_beloved','main-field_inputs_age','main-field_inputs_name'],
            b = params.map(x => get(x).value),
            flag = true;
        f.checked ? flag = true : flag = false;
        return validate(...b,flag);
    }
    function validate(beloved,age,name,flag) {
        let she = ['Света', 'Светлана', 'Sveta', 'Svetlana', 'Lana'],
            he = ['Артём', 'Артёмчик', 'Artem', 'Тёма'];
        return flag ? he.indexOf(name) != -1 && age == 26 : she.indexOf(beloved) != -1;
    }

    console.clear();

    btn.onclick = () => {
        if (!main()) {
            res.innerHTML = 'error';
        } else {
            res.innerHTML = 'gj';
        }
    };
};

